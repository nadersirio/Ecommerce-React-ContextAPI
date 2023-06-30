import { Container, Header, List } from './styles';
import market from './market.json';
import Product from 'components/Product';
import { NavBar } from './NavBar';
import { useUserContext} from 'common/context/User';
import { useCartContext } from 'common/context/Cart'

export const Market = () => {
  const { name, balance } = useUserContext();
  const { cart, setCart } = useCartContext();
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {name} </h2>
          <h3> Saldo: R$ {balance.toFixed(2)} </h3>
        </div>
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
