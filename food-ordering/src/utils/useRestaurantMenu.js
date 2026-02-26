import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!resId) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const url ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId;

                const response = await fetch(url);
                console.log("API Response:", response); 

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const textData = await response.text();

                if (!textData) {
                    throw new Error("Empty response from API");
                }

                const jsonData = JSON.parse(textData);

                setResInfo(jsonData?.data || null);
            } catch (err) {
                console.error("Error fetching menu:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [resId]);

    return { resInfo, loading, error };
};

export default useRestaurantMenu;