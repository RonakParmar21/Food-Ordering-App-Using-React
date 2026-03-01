import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const { resInfo, loading, error } = useRestaurantMenu(resId);

    console.log("resid : ", resId);
    console.log("res info : ", resInfo); 

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    if (!resInfo) return <h2>No Data Found</h2>;

       

    return (
        <div>
            <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
            <h2>{resData?.info}</h2>
            <h2>{ resId }</h2>
            <h2>{ JSON.stringify(resInfo) }</h2>
            <h2>{ loading }</h2>
        </div>
    );
};

export default RestaurantMenu;