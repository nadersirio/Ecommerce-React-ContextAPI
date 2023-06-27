import { Container, Header, List } from './styles';
import market from './market.json';
import Product from 'components/Product';
import { NavBar } from './NavBar';
import { UserContext} from 'common/context/User';
import { useContext } from 'react';
import { calcCartValue } from 'common/context/User'

export const Market = () => {
  const { name, balance, cart, setCart } = useContext(UserContext);
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {name} </h2>
          <h3> Saldo: R$ {balance.toFixed(2)} </h3>
        </div>
        <h4> Carrinho: R$ {calcCartValue(cart).toFixed(2)}</h4>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <List>
        <h2>
          Produtos:
        </h2>
        {market.map(product => (
          <Product
            {...product}
            cart={cart}
            setCart={setCart}
            key={product.id}
          />
        ))}
      </List>
    </Container>
  )
}
