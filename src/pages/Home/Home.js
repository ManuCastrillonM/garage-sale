import './Home.scss';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CardList from '../../components/CardList/CardList';
import Products from '../../assets/products.json';

function home() {
  return (
    <div className="home">
      <div className="home__content">
        <Header />
        <About />
        <CardList items={Products} />
      </div>
      <Footer />
    </div>
  );
}

export default home;
