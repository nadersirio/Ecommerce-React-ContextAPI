import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { UsuarioContext } from 'common/context/Usuario';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Carrinho = () => {
  const { saldo, setSaldo, carrinho, setCarrinho } = useContext(UsuarioContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const saldoTotal = saldo - carrinho;
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
            <span>R$ {carrinho} </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {saldo} </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {saldoTotal} </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          setSaldo(saldoTotal);
          setCarrinho(0);
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
