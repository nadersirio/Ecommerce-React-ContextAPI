import { Button, InputLabel } from '@material-ui/core';
import { Container, Return, TotalContainer, PaymentContainer} from './styles';
import { UserContext } from 'common/context/Usuario';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calcValueCart } from 'components/FuncoesSecundarias';
import { Snackbar } from 'components/snackbar-render'

export const Carrinho = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const { balance, setBalance, cart, setCart } = useContext(UserContext);
  const cartValue = calcValueCart(cart);
  const finalBalance = balance - cartValue;
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
            <span>R$ {cartValue.toFixed(2)} </span>
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
          setOpenSnackbar(true)
          setBalance(finalBalance);
          setCart([]);
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
