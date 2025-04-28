import { createContext, useState, useMemo, useEffect } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");

  console.log("StoreContext - food_list:", food_list);
  console.log("StoreContext - cartItems:", cartItems);

  useEffect(() => {
    console.log("StoreContext - cartItems changed:", cartItems);
  }, [cartItems]);

  const addToCart = (itemId) => {
    console.log("StoreContext - addToCart called with itemId:", itemId);
    console.log("StoreContext - cartItems before:", cartItems);
    setCartItems((prev) => {
      const newCartItems = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
      console.log("StoreContext - cartItems after:", newCartItems);
      return newCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    console.log("StoreContext - removeFromCart called with itemId:", itemId);
    console.log("StoreContext - cartItems before:", cartItems);
    setCartItems((prev) => {
      if (prev[itemId] <= 1) {
        const { [itemId]: _, ...rest } = prev;
        console.log("StoreContext - cartItems after (removed):", rest);
        return rest;
      }
      const newCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
      console.log(
        "StoreContext - cartItems after (decremented):",
        newCartItems
      );
      return newCartItems;
    });
  };

  const contextValue = useMemo(
    () => ({
      food_list,
      menu_list,
      category,
      setCategory,
      cartItems,
      addToCart,
      removeFromCart,
    }),
    [food_list, menu_list, category, cartItems]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
