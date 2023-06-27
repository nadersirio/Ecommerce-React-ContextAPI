import { Container } from './styles';
import { memo, useState } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Snackbar } from 'components/snackbar-render';
import { TiraDoCarrinho, AdicionaAoCarrinho } from '../FuncoesSecundarias';


const Produto = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRemoveItemCart = () => {
    const itemOnCart = props.carrinho.filter(item => item.nome === props.nome);
    if (!props.carrinho.length || itemOnCart) {
      return setOpenSnackbar(true);
    }
    TiraDoCarrinho(props)
  }

  return (
    <Container>
      <div>
        <img
          src={`/assets/${props.foto}.png`}
          alt={`foto de ${props.nome}`}
        />
        <p>
          {props.nome} - R$ {props.valor.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          onClick={handleRemoveItemCart}
          color="secondary">
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => AdicionaAoCarrinho(props)}>
          <AddIcon />
        </IconButton>
      </div>
      <Snackbar severity="error" msg="Esse item não consta em seu carrinho!" openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} />
    </Container>
  )
}

export default memo(Produto)