import { Container } from './styles';
import { memo, useState } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCartContext } from 'common/context/Cart';
import { Snackbar } from 'components/Snackbar';


const Product = (props) => {
  const {
    cart,
    initialState,
    addOnCart,
    removeFromCart,
    handleRemoveItemCart,
  } = useCartContext();
  const [ {open, severity, msg}, setSnackbarConfig ] = useState(initialState);
  const { name, id, photo, value } = props;
  const ProductOnCart = cart.find(itemOnCart => itemOnCart.id === id);
  const handleRemoveItemCartParamns = {
    id,
    name,
    setSnackbarConfig,
  }
  return (
    <Container>
      <div>
        <img
          src={`/assets/${photo}.png`}
          alt={`foto de ${name}`}
        />
        <p>
          {name} - R$ {value.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          onClick={() => handleRemoveItemCart(handleRemoveItemCartParamns)}
          color="secondary">
          <RemoveIcon />
        </IconButton>
        {ProductOnCart?.quantity || 0}
        <IconButton
          color="primary"
          onClick={() => addOnCart(props)}>
          <AddIcon />
        </IconButton>
      </div>
      <Snackbar severity={severity} msg={msg} openSnackbar={open} setSnackbarConfig={setSnackbarConfig} initialState={initialState} />
    </Container>
  )
}

export default memo(Product)