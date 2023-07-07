import { Nav } from './styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from 'common/context/Cart';

export const NavBar = () => {
  const navigate = useNavigate();
  const { quantityOnCart } = useCartContext();
  return (
    <Nav>
      <img src="/assets/logo.svg" alt="logo" />
      <IconButton
        disabled={quantityOnCart === 0}
        color="secondary"
        onClick={() => navigate('/cart')}
      >
        <Badge
          color="primary"
          badgeContent={quantityOnCart}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}