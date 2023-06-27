import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        balance,
        setBalance,
        cart,
        setCart,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export const calcCartValue = (cart) => {
  return cart.reduce((totalValue, item) => totalValue + item.value, 0);
};


export const removeFromCart = (props) => {
  const indexToRemove = props.cart.findIndex((item) => item.item === props.name);
  props.setCart(props.cart.filter((_, index) => indexToRemove !== index))
}

export const addOnCart = (props) => {
  const item = {
    "item": props.name,
    "value": props.value,
  };
  props.setCart([...props.cart, item]);
};
