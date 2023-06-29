import { createContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

const initialState = {
  open: false,
  severity: "success",
  msg: "",
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{ cart, setCart, initialState}}>
      {children}
    </CartContext.Provider>
  )
}

export const calcCartValue = (cart) => {
  return cart.reduce((totalValue, item) => totalValue + item.value, 0);
};


export const removeFromCart = (props) => {
  const indexToRemove = props.cart.findIndex((item) => item.name === props.name);
  props.setCart(props.cart.filter((_, index) => indexToRemove !== index))
}

export const addOnCart = (props) => {
  const item = {
    "name": props.name,
    "value": props.value,
  };
  props.setCart([...props.cart, item]);
};
