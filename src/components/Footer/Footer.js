import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__icon">🍃</span>
      <p>
        Creado por
        {' '}
        <a
          className="footer__anchor"
          href="https://github.com/ManuCastrillonM"
          rel="noopener noreferrer"
        >
          Manu
        </a>
        {' '}
        y
        {' '}
        <a
          className="footer__anchor"
          href="https://github.com/svargaslondono"
          rel="noopener noreferrer"
        >
          Sebas
        </a>
        {' '}
      </p>
      <span className="footer__icon">🍃</span>
    </footer>
  );
}

export default Footer;
