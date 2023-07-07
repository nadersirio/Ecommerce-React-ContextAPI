import { Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Container, Return, TotalContainer, PaymentContainer} from './styles';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'common/context/User';
import { useCartContext } from 'common/context/Cart';
import { usePaymentContext } from 'common/context/Payment';
import { Snackbar } from 'components/Snackbar';
import Product from 'components/Product';

export const Cart = () => {
  const navigate = useNavigate();
  const { balance, setBalance } = useUserContext();
  const { paymentTypes, formPayment, changePaymentMethod } = usePaymentContext();
  const { cart, initialState, calcCartValue, checkPayment } = useCartContext();
  const [{open, severity, msg}, setSnackbarConfig] = useState(initialState);
  const valueCart = calcCartValue() * formPayment.interest;
  const finalBalance = useMemo(() => balance - valueCart, [balance, valueCart]);

  const checkPaymentParamns = {
    valueCart,
    balance,
    finalBalance,
    setBalance,
    setSnackbarConfig,
  }

  return (
    <Container>
      <Return onClick={() => navigate(-1)}/>
      <h2>
        Carrinho
      </h2>
      {cart.map(product => (
        <Product
          {...product}
          key={product.id}
        />
      ))}
      <PaymentContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formPayment.id}
          onChange={(event) => changePaymentMethod(event.target.value)}
        >
          {paymentTypes.map(payment => (
            <MenuItem value={payment.id} key={payment.id}>
              {payment.name}
            </MenuItem>
          ))}
        </Select>
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
          onClick={() => checkPayment(checkPaymentParamns)}
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
