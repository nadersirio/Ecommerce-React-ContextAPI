import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Market } from './pages/Market';
import { Cart } from './pages/Cart';
import { UserProvider } from './common/context/User';
import { CartProvider } from 'common/context/Cart';
import { PaymentProvider } from 'common/context/Payment';

export const Router = () => {
  return (
    <UserProvider>
      <CartProvider>
        <PaymentProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/market" element={<Market />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </PaymentProvider>
      </CartProvider>
    </UserProvider>
  );
};
