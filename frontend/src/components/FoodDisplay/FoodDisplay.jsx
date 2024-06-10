import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import PropTypes from "prop-types";
import { food_list } from "../../assets/asset";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  const [list, setList] = useState(food_list);
  /*   const [searchText, setSearchText] = useState(""); */
  /*   const handleSearch = () => {
    const filteredRestaurant = food_list.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredRestaurant);
  }; */

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2 className="heading">Top Restaurants near you</h2>
        <div className="filter">
          <button
            className="btn-filter box"
            /*  onClick={() => {
              console.log("clicked");
              const filteredList = list.filter((res) => res.avgRating === 4);
              setList(filteredList);
            }} */
            onClick={() => {
              console.log("clicked");
              const filteredList = list.filter((res) => res.avgRating >= 4.2);
              setList(filteredList);
            }}
          >
            Top Restaunt
          </button>
        </div>
        <br />
        {/* 
        <div className="search">
          <form>
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </form>
        </div> */}
        <div className="food-display-list">
          {list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  rating={item.avgRating}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};
export default FoodDisplay;
