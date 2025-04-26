import { createContext, useState, useCallback, useMemo } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");

  const addToCart = useCallback((itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] <= 1) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }, []);

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
    [food_list, menu_list, category, cartItems, addToCart, removeFromCart]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
