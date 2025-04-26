import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        efficitur, nunc et bibendum facilisis, nunc nisl aliquet nunc, eget
        tincidunt nunc nisl eget nunc. Donec euismod, nisl eget consectetur.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }
            }}
            className="explore-menu-item"
            key={index}
            role="button"
            tabIndex={0}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={`Image of ${item.menu_name}`}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
