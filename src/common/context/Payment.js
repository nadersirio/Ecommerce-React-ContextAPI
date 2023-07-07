import { createContext, useContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const paymentTypes = [{
    name: "Boleto",
    interest: 1,
    id: 1
  }, {
    name: "Cartão de Crédito",
    interest: 1.3,
    id: 2
  }, {
    name: "PIX",
    interest: 1,
    id: 3
  }, {
    name: "Crediário",
    interest: 1.5,
    id: 4
  }];
  const [formPayment, setFormPayment] = useState(paymentTypes[0])
  return (
    <PaymentContext.Provider
      value={{
        paymentTypes,
        formPayment,
        setFormPayment
      }}>
      {children}
    </PaymentContext.Provider>
  )
}

export const usePaymentContext = () => {
  const {
    paymentTypes,
    formPayment,
    setFormPayment
  } = useContext(PaymentContext);

  const changePaymentMethod = (id) => {
    const method = paymentTypes.find(payment => payment.id === id);
    setFormPayment(method);
  }

  return {
    paymentTypes,
    formPayment,
    changePaymentMethod,
  }
}
