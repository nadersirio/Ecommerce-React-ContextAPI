import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { UsuarioContext } from 'common/context/Usuario';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalculaValorCarrinho } from '../../components/FuncoesSecundarias';

export const Carrinho = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const { saldo, setSaldo, carrinho, setCarrinho } = useContext(UsuarioContext);
  const valorCarrinho = CalculaValorCarrinho(carrinho);
  const saldoFinal = saldo - valorCarrinho;
  return (
    <Container>
      <Voltar onClick={() => navigate('/feira')}/>
      <h2>
        Carrinho
      </h2>
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorCarrinho.toFixed(2)} </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {saldo.toFixed(2)} </span>
          </div>
          <div>
            <h2> Saldo Final: </h2>
            <span> R$ {saldoFinal.toFixed(2)} </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          setSaldo(saldoFinal);
          setCarrinho([]);
          navigate('/feira');
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
