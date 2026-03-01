import FoodCard from "./FoodCard";

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import { withVegLabel, withNonVegLabel } from "./FoodCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const FoodCardVeg = withVegLabel(FoodCard);
  const FoodCardNonVeg = withNonVegLabel(FoodCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296",
    );

    const jsonData = await data.json();

    setListOfRestraunt(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>You are offline.</h1>;

  // if(listOfRestaurants?.length === 0) {
  //   return <Shimmer />
  // }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setListOfRestraunt(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">
        <label htmlFor="">User Name : </label>
        <input
        className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        /></div>
      <div className="rest-container">
        {/* {filteredRestaurant && filteredRestaurant.map((res) => ( */}
        {filteredRestaurant?.map((res) => (
          <Link key={res.info.id} to={"/restaurantmenu/" + res.info.id}>
            {res.info.veg ? (
              <FoodCardVeg resData={res} />
            ) : (
              <FoodCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
