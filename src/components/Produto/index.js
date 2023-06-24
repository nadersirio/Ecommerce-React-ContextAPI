import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const Produto = (props) => {
  return (
    <Container>
      <div>
        <img
          src={`/assets/${props.foto}.png`}
          alt={`foto de ${props.nome}`}
        />
        <p>
          {props.nome} - R$ {props.valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          onClick={() => props.setCarrinho(props.carrinho - props.valor)}
          color="secondary">
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => props.setCarrinho(props.carrinho + props.valor)}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)