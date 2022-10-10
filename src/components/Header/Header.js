import './Header.scss';
import headerImg from '../../assets/images/header-image.png';

function Header() {
  const animateHeader = (e) => {
    const element = e.target;

    if (e.type === 'mouseenter') {
      const { clientX, clientY } = e;
      const {
        clientHeight, clientWidth, offsetLeft, offsetTop,
      } = element;

      const imageCenterX = offsetLeft + (clientWidth / 2);
      const imageCenterY = offsetTop + (clientHeight / 2);

      const newClientX = clientX >= imageCenterX ? -5 : 5;
      const newClientY = clientY >= imageCenterY ? -5 : 5;

      element.style.transform = `translate(${newClientX}px, ${newClientY}px)`;
    } else {
      element.style.transform = 'translate(0)';
    }
  };

  const scrollToProducts = () => {
    const products = document.getElementById('products');
    products.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__content">
          <h1 className="header__title">
            La tiendita
            {' '}
            <br />
            {' '}
            de Mango
          </h1>
          <button type="button" className="header__cta" onClick={scrollToProducts}>Ver productos</button>
        </div>
        <div className="header__image-container">
          <img className="header__image" onMouseEnter={(e) => animateHeader(e)} onMouseLeave={(e) => animateHeader(e)} src={headerImg} alt="Mango's face" />
        </div>
      </div>
    </header>
  );
}

export default Header;
