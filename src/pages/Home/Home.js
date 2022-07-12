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
      </div>
      <Footer />
    </div>
  );
}

export default home;
