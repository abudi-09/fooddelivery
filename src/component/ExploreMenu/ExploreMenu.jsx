import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1> Explore our Menu </h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        efficitur, nunc et bibendum facilisis , nunc nisl aliquet nunc, eget
        tincidunt nunc nisl eget nunc. Donec euismod, nisl eget consectetur
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-item" key={index}>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
