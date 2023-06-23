import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Feira } from 'pages/Feira';
import { Carrinho } from 'pages/Carrinho';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/feira" element={<Feira />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  )
}
