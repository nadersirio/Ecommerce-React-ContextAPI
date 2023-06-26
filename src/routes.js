import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Feira } from 'pages/Feira';
import { Carrinho } from 'pages/Carrinho';
import { UsuarioProvider} from 'common/context/Usuario';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <UsuarioProvider>
            <Login/>
          </UsuarioProvider>
        }/>
        <Route exact path="/feira" element={
          <UsuarioProvider>
            <Feira/>
          </UsuarioProvider>
        }/>
        <Route exact path="/carrinho" element={
          <UsuarioProvider>
            <Carrinho />
          </UsuarioProvider>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
