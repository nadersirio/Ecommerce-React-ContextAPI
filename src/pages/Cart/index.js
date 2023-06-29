import { Button, InputLabel } from '@material-ui/core';
import { Container, Return, TotalContainer, PaymentContainer} from './styles';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'common/context/User';
import { CartContext, calcCartValue } from 'common/context/Cart';
import { Snackbar } from 'components/Snackbar';

export const Cart = () => {
  const navigate = useNavigate();
  const { balance, setBalance } = useContext(UserContext);
  const { cart, setCart, initialState } = useContext(CartContext);
  const [{open, severity, msg}, setSnackbarConfig] = useState(initialState);
  const valueCart = calcCartValue(cart);
  const finalBalance = balance - valueCart;

  const checkPayment = () => {
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

  return (
    <Container>
      <Return onClick={() => navigate('/market')}/>
      <h2>
        Carrinho
      </h2>
      <PaymentContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PaymentContainer>
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
          checkPayment();
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        severity={severity}
        msg={msg}
        openSnackbar={open}
        setSnackbarConfig={setSnackbarConfig}
        initialState={initialState}
      />
    </Container>
  )
}
