import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { UserContext } from 'common/context/User';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calcCartValue } from 'components/FuncoesSecundarias';

export const Cart = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const { balance, setBalance, cart, setCart } = useContext(UserContext);
  const valueCart = calcCartValue(cart);
  const finalBalance = balance - valueCart;
  return (
    <Container>
      <Voltar onClick={() => navigate('/market')}/>
      <h2>
        Carrinho
      </h2>
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valueCart.toFixed(2)} </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {balance.toFixed(2)} </span>
          </div>
          <div>
            <h2> Saldo Final: </h2>
            <span> R$ {finalBalance.toFixed(2)} </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          setBalance(finalBalance);
          setCart([]);
          navigate('/market');
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
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
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}
