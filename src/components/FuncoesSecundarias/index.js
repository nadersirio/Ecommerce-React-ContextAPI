export const calcCartValue = (cart) => {
  if (!cart.length) {
    return 0;
  }
  let totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i].value;
  }
  return totalValue;
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
