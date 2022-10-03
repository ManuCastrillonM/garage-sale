import { useState, useEffect } from 'react';

import About from '../../components/About/About';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ProductsBanner from '../../components/ProductsBanner/ProductsBanner';

const contentful = require('contentful');

function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const key = queryParams.get('key') === process.env.REACT_APP_QUERY_KEY;

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'product',
    }).then(((response) => {
      setProducts(response.items);
    }));
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <Navigation />
        <Header />
        <About />
        { key ? (
          <CardList items={products} />
        ) : (
          <ProductsBanner />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
