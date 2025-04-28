import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext"; // Update the path to match index.jsx

const Fooditem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const quantity = cartItems[id] || 0;

  console.log("Fooditem - Rendering:", { id, name, quantity });
  console.log("Fooditem - cartItems:", cartItems);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={`Image of ${name}`} />
        {quantity === 0 ? (
          <img
            className="add"
            onClick={() => {
              console.log("Fooditem - Adding to cart:", { id, name });
              addToCart(id);
            }}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => {
                console.log("Fooditem - Removing from cart:", { id, name });
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{quantity}</p>
            <img
              onClick={() => {
                console.log("Fooditem - Adding more to cart:", { id, name });
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt="Add more to cart"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-img-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
