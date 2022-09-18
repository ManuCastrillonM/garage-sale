import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ items }) {
  return (
    <section id="products" className="card-list">
      {items.map((item) => (
        <Card {...item.fields} key={item.sys.id} />
      ))}
    </section>
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};

export default CardList;
