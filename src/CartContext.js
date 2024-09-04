import React, { useContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = React.createContext(null);

let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch (error) {
  console.error("The cart could not be passed in JSON");
  initialCart = [];
}

export function CartProvider(props) {
  const [cart, dispatch] = useReducer(CartReducer, initialCart);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider. Wrap a parent component in <cartProvider> to fix this erreo."
    );
  }
  return context;
}
