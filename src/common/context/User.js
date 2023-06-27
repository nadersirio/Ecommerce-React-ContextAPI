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
