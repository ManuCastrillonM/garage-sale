import './ProductsBanner.scss';

function ProductsBanner() {
  return (
    <section id="products" className="products-banner" data-testid="coming-soon">
      <div className="products-banner__content">
        <h2 className="products-banner__title">
          Próximamente
        </h2>
        <p className="products-banner__description">
          Pronto encontrarás los productos disponibles en este espacio
        </p>
      </div>
    </section>
  );
}

export default ProductsBanner;
