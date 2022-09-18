import './ProductsBanner.scss';

function ProductsBanner() {
  return (
    <section className="products-banner">
      <div className="products-banner__content container">
        <h2 className="products-banner__title">
          Proximamente
        </h2>
        <p className="products-banner__description">
          Pronto encontrarás los productos disponibles en este espacio
        </p>
      </div>
    </section>
  );
}

export default ProductsBanner;
