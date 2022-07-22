import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ items }) {
  return (
    <section className="card-list">
      {items.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </section>
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};

export default CardList;
