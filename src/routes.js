import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Market } from 'pages/Market';
import { Cart } from 'pages/Cart';
import { UserProvider } from 'common/context/User';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <UserProvider>
            <Login/>
          </UserProvider>
        }/>
        <Route exact path="/market" element={
          <UserProvider>
            <Market/>
          </UserProvider>
        }/>
        <Route exact path="/cart" element={
          <UserProvider>
            <Cart />
          </UserProvider>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
