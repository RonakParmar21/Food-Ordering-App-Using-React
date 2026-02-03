import FoodCard from "./FoodCard";
import resObj from "../utils/mockData"; // not required because I fetch live swiggy data.

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296",
    );

    const jsonData = await data.json();
    setListOfRestraunt(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
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
            setFilteredResturants(filteredRestaurant);
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
      <div className="rest-container">
        {filteredResturants.map((res) => (
          <FoodCard key={res.info.id} resData={res} />
        ))}
      </div>
    </>
  );
};

export default Body;
