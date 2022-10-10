import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import About from '../../components/About/About';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ProductModal from '../../components/ProductModal/ProductModal';

const contentful = require('contentful');

function Home() {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  const [products, setProducts] = useState([]);
  const featuredProduct = useSelector((state) => state.featuredProduct.product);

  useEffect(() => {
    client.getEntries({
      content_type: 'product',
      limit: 300,
    }).then(((response) => {
      const filteredProducts = response.items.filter((item) => item.fields.status !== 'sold');
      setProducts(filteredProducts.sort((a, b) => a.fields.name.localeCompare(b.fields.name)));
    }));
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <Navigation />
        <Header />
        <About />
        <CardList items={products} />
        {
          featuredProduct
          && <ProductModal {...featuredProduct} />
        }
      </div>
      <Footer />
    </div>
  );
}

export default Home;
