import logo from '../../logo.svg';
import './Home.scss';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

function home() {
  return (
    <div className="home">
      <Navigation />
      <div className="home__content">
        <Header />
        <About />
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/home.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default home;
