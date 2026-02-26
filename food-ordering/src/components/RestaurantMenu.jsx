import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const { resInfo, loading, error } = useRestaurantMenu(resId);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    if (!resInfo) return <h2>No Data Found</h2>;

    return (
        <div>
            <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
        </div>
    );
};

export default RestaurantMenu;