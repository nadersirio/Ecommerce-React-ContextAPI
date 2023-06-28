import { Button, InputLabel } from '@material-ui/core';
import { UserContext, calcCartValue } from 'common/context/User';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from 'components/Snackbar'
import { Container, TotalContainer, PaymentContainer, Voltar } from './styles';

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
      <Snackbar severity="success" msg="Compra feita com sucesso!" openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} />
    </Container>
  )
}
