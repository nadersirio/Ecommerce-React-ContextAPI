import { Container } from './styles';
import { memo, useState } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Snackbar } from 'components/snackbar-render';
import { removeFromCart, addOnCart } from '../FuncoesSecundarias';


const Product = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRemoveItemCart = () => {
    const itemOnCart = props.cart.filter(item => item.name === props.name);
    if (!props.cart.length || itemOnCart) {
      return setOpenSnackbar(true);
    }
    removeFromCart(props)
  }

  return (
    <Container>
      <div>
        <img
          src={`/assets/${props.foto}.png`}
          alt={`foto de ${props.name}`}
        />
        <p>
          {props.name} - R$ {props.valor.toFixed(2)} <span>Kg</span>
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
      <Snackbar severity="error" msg="Esse item não consta em seu cart!" openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} />
    </Container>
  )
}

export default memo(Product)