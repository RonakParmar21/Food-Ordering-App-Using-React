import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants"

const FoodCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;

  const dispatch = useDispatch();

  const handleAddItem = (resData) => {
    // dispatch an action to add item to cart
    dispatch(addItem(resData));
  }
  

  return (
    <div className="food-card">
      <img
        src={
          CDN_URL +
          resData.info.cloudinaryImageId
        }
      />

      <div className="food-info">
        <h3>{name}</h3>
        <p className="cuisine">{cuisines.join(", ")}</p>

        <div className="food-meta">
          <span>⭐ {avgRating}</span>
          <span>⏱ {resData.info.sla.deliveryTime} min</span>
        </div>
        <div>
          <button className="border border-2 p-1 m-2" onClick={() => handleAddItem(resData)}>Add + </button>
        </div>
      </div>
    </div>
  );
};

// higher order component

// input - restaurantcard  ==> Restaurant card veg

export const withVegLabel = (FoodCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-3 p-3 rounded-lg">Veg</label>
        <FoodCard {...props} />
      </div>
    );
  };
};

export const withNonVegLabel = (FoodCard) => {
  return(props) => {
    return (
      <div>
        <label>Non Veg</label>
        <FoodCard {...props} />
      </div>
    )
  }
}

export default FoodCard;