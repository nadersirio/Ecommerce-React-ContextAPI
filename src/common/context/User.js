import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        balance,
        setBalance,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const { name, setName, balance, setBalance } = useContext(UserContext);
  return {
    name,
    setName,
    balance,
    setBalance,
  }
}
