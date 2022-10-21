import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ items }) {
  const orderType = useSelector((state) => state.filters.order);

  const sortedItems = useMemo(() => {
    switch (orderType) {
      case 'price-low-high':
        return items.sort((a, b) => (a.fields.price || 0) - (b.fields.price || 0));
      case 'price-high-low':
        return items.sort((a, b) => (b.fields.price || 0) - (a.fields.price || 0));
      case 'alphabetical-az':
        return [...items].sort((a, b) => a.fields.name.localeCompare(b.fields.name));
      case 'alphabetical-za':
        return [...items].sort((a, b) => b.fields.name.localeCompare(a.fields.name));
      default:
        return items;
    }
  }, [items, orderType]);

  return (
    <section id="products" className="card-list">
      {sortedItems.map((item) => (
        <Card data={item.fields} key={item.sys.id} />
      ))}
    </section>
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};

export default CardList;
