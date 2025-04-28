import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Calculate subtotal
  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  // Check if there are items in the cart
  const hasItems = Object.values(cartItems).some((quantity) => quantity > 0);

  // Apply delivery fee only if there are items in the cart
  const deliveryFee = hasItems ? 2 : 0;

  // Calculate total
  const total = subtotal + deliveryFee;

  console.log("Cart - cartItems:", cartItems);
  console.log("Cart - food_list:", food_list);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list && Object.keys(cartItems || {}).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          food_list?.map((item) => {
            if (cartItems[item._id] > 0) {
              console.log("Cart - Rendering item:", {
                id: item._id,
                name: item.name,
                quantity: cartItems[item._id],
              });
              return (
                <div
                  className="cart-items-title cart-items-item"
                  key={item._id}
                >
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    Remove
                  </p>
                </div>
              );
            }
            return null;
          })
        )}
      </div>

      {/* Cart Bottom Section */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/Order")}
            className="cart-total-button"
          >
            Proceed To Checkout
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
