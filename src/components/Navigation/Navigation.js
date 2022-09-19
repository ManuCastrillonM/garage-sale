import './Navigation.scss';
import cartImage from '../../assets/icons/shopping-cart.svg';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <button type="button" className="nav__cart">
            <img className="nav__cart-img" src={cartImage} alt="carro de compras" />
            <span className="nav__cart-num">0</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
