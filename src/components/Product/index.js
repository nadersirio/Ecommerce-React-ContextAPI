import { Container } from './styles';
import { memo, useState } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MuiAlert from '@material-ui/lab/Alert';
import { removeFromCart, addOnCart } from 'common/context/User';


const Product = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRemoveItemCart = () => {
    if (!props.cart.length) {
      return setOpenSnackbar(true);
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
      <Snackbar
        anchorOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
      <MuiAlert
        onClose={() => setOpenSnackbar(false)}
        severity="error"
      >
        Carrinho ja está vazio!
      </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default memo(Product)