import { Button } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'common/context/User';

export const Login = () => {
  const navigate = useNavigate();
  const { name, setName, balance, setBalance } = useUserContext();
  return (
    <Container>
      <Title>
        Insira o seu nome
      </Title>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          type="number"
          value={balance}
          onChange={(event) => setBalance(parseInt(event.target.value))}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={name.length < 3}
        onClick={() => navigate('/market')}
      >
        Avançar
      </Button>
    </Container>
  )
};
