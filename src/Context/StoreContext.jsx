import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/asset";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    setCartItems((prev) => {
      const currentItem = prev[item.id];
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: (currentItem ? currentItem.quantity : 0) + 1,
        },
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const { quantity } = prev[itemId];
      if (quantity > 1) {
        return {
          ...prev,
          [itemId]: {
            ...prev[itemId],
            quantity: quantity - 1,
          },
        };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
  };

  useEffect(() => {
    console.log("Cart items:", cartItems); // Should log cart items correctly
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
