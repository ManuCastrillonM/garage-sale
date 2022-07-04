import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <span className="Footer__icon">🍃</span>
      <p>
        Creado por
        {' '}
        <a
          className="Footer__anchor"
          href="https://github.com/ManuCastrillonM"
          rel="noopener noreferrer"
        >
          Manu
        </a>
        {' '}
        y
        {' '}
        <a
          className="Footer__anchor"
          href="https://github.com/svargaslondono"
          rel="noopener noreferrer"
        >
          Sebas
        </a>
        {' '}
      </p>
      <span className="Footer__icon">🍃</span>
    </footer>
  );
}

export default Footer;
