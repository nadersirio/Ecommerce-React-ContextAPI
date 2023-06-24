import { Container } from './styles';
import { memo, useState } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MuiAlert from '@material-ui/lab/Alert';
import { TiraDoCarrinho, AdicionaAoCarrinho } from '../FuncoesSecundarias';


const Produto = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
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
          onClick={() => TiraDoCarrinho(props, setOpenSnackbar)}
          color="secondary">
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => AdicionaAoCarrinho(props)}>
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

export default memo(Produto)