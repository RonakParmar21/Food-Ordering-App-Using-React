import { CDN_URL } from "../utils/constants"

const FoodCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
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