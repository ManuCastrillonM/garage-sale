import { useState, useEffect } from 'react';

import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CardList from '../../components/CardList/CardList';

const contentful = require('contentful');

function Home() {
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
        <Header />
        <About />
        <CardList items={products} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
