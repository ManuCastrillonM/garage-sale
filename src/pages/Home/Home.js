import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import About from '../../components/About/About';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ProductModal from '../../components/ProductModal/ProductModal';
import Filters from '../../components/Filters/Filters';

const contentful = require('contentful');

function Home() {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  const categoriesFilter = useSelector((state) => state.filters.categories);
  const availabilityFilter = useSelector((state) => state.filters.availability);

  const [products, setProducts] = useState([]);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const isAvailable = availabilityFilter === 'all'
      || (availabilityFilter === 'available'
        ? (product.fields.status === 'available') || (product.fields.status === 'unavailable')
        : product.fields.status === availabilityFilter);

    const isInCategories = categoriesFilter.length === 0
      || categoriesFilter.some((category) => product.fields.categories.includes(category));

    return isAvailable && isInCategories;
  }), [products, categoriesFilter, availabilityFilter]);

  const featuredProduct = useSelector((state) => state.featuredProduct.product);

  useEffect(() => {
    client.getEntries({
      content_type: 'product',
      limit: 300,
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
        <Filters />
        <CardList items={filteredProducts} />
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
