import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/storecontext";
import Fooditem from "../Fooditem/Fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <section className="food-display" id="food-display">
      <h2 id="food-display-title">Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item) => (
            <Fooditem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
