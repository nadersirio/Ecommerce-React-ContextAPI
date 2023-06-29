import { Container } from './styles';
import { memo, useState, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { removeFromCart, addOnCart, CartContext } from 'common/context/Cart';
import { Snackbar } from 'components/Snackbar';


const Product = (props) => {
  const { initialState } = useContext(CartContext);
  const [ {open, severity, msg}, setSnackbarConfig ] = useState(initialState);

  const handleRemoveItemCart = () => {
    const itemOnCart = props.cart.filter(item => item.name === props.name);
    if (!props.cart.length || !itemOnCart.length) {
      return setSnackbarConfig({
        open: true,
        severity: "error",
        msg: "Este item não consta em seu carrinho!",
      });
    }
    removeFromCart(props)
  }

  return (
    <Container>
      <div>
        <img
          src={`/assets/${props.photo}.png`}
          alt={`foto de ${props.name}`}
        />
        <p>
          {props.name} - R$ {props.value.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          onClick={handleRemoveItemCart}
          color="secondary">
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => addOnCart(props)}>
          <AddIcon />
        </IconButton>
      </div>
      <Snackbar severity={severity} msg={msg} openSnackbar={open} setSnackbarConfig={setSnackbarConfig} initialState={initialState} />
    </Container>
  )
}

export default memo(Product)