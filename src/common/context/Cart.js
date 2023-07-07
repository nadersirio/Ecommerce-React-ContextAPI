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

  const changeQuantity = (id, quantity) => {
    return cart.map(itemOnCart => {
      if(itemOnCart.id === id) itemOnCart.quantity += quantity;
      return itemOnCart;
    })
  }

  const calcCartValue = () => {
    const itemValues = cart.map(item => item.quantity * item.value);
    return itemValues.reduce((accumulator, value) => accumulator + value, 0);
  };

  const removeFromCart = (id, cart) => {
    const itemQuantitySubtraction = cart.find(item => item.id === id).quantity - 1;
    if(itemQuantitySubtraction <= 0) {
      return setCart(lastCart => lastCart.filter(itemOnCart => itemOnCart.id !== id));
    }
    setCart(changeQuantity(id, -1))
  }

  const addOnCart = (props) => {
    const { name, photo, id, value } = props;
    const newProduct = { name, photo, id, value };
    const hasTheProduct = cart.some(itemOnCart => itemOnCart.id === newProduct.id);
    if(!hasTheProduct) {
      newProduct.quantity = 1;
      return setCart(lastCart => [...lastCart, newProduct]
      );
    }
    setCart(changeQuantity(newProduct.id, +1))
  }

  const checkPayment = (props) => {
    const {
      valueCart,
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
    const { name, id, setSnackbarConfig } = props;
    const itemOnCart = cart.filter(item => item.name === name);
    if (!cart.length || !itemOnCart.length) {
      return setSnackbarConfig({
        open: true,
        severity: "error",
        msg: "Este item não consta em seu carrinho!",
      });
    }
    removeFromCart(id, cart)
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
