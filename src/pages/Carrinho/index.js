import { Button, InputLabel } from '@material-ui/core';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { UsuarioContext } from 'common/context/Usuario';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalculaValorCarrinho } from 'components/FuncoesSecundarias';
import { Snackbar } from 'components/snackbar-render'

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
          setOpenSnackbar(true)
          setSaldo(saldoFinal);
          setCarrinho([]);
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
