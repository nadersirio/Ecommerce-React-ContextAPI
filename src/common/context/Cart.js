import { createContext, useContext, useState } from "react";

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

export const useCartContext = () => {
  const { cart, setCart, initialState } = useContext(CartContext);

  const calcCartValue = (cart) => {
    const itemValues = cart.map(item => item.quantity * item.value);
    return itemValues.reduce((accumulator, value) => accumulator + value, 0);
  };

  const removeFromCart = (props) => {
    const { name, cart, setCart } = props;
    const indexToRemove = cart.findIndex((item) => item.name === name);
    setCart(cart.filter((_, index) => indexToRemove !== index))
  }

  const addOnCart = (props) => {
    const { name, photo, id, value, cart, setCart } = props;
    const newProduct = { name, photo, id, value };
    const hasTheProduct = cart.some(itemOnCart => itemOnCart.id === newProduct.id);
    if(!hasTheProduct) {
      newProduct.quantity = 1;
      return setCart(lastCart => [...lastCart, newProduct]
      );
    }
    setCart(lastCart => lastCart.map(itemOnCart => {
      if(itemOnCart.id === newProduct.id) itemOnCart.quantity += 1;
      return itemOnCart;
    }))
  }

  const checkPayment = (props) => {
    const {
      valueCart,
      setCart,
      balance,
      finalBalance,
      setBalance,
      setSnackbarConfig,
    } = props;

    if(valueCart > balance || !valueCart) {
      return setSnackbarConfig({
        open: true,
        severity: "error",
        msg: "Compra Recusada."
      })
    }
    setSnackbarConfig({
      open: true,
      severity: "success",
      msg: "Compra feita com sucesso!",
    });
    setBalance(finalBalance);
    setCart([]);
  }

  const handleRemoveItemCart = (props) => {
    const { cart, name, setSnackbarConfig, removeFromCart } = props;
    const itemOnCart = cart.filter(item => item.name === name);
    if (!cart.length || !itemOnCart.length) {
      return setSnackbarConfig({
        open: true,
        severity: "error",
        msg: "Este item não consta em seu carrinho!",
      });
    }
    removeFromCart(props)
  }

  return {
    cart,
    setCart,
    initialState,
    calcCartValue,
    removeFromCart,
    addOnCart,
    checkPayment,
    handleRemoveItemCart,
  }
}
