import PropTypes from 'prop-types';
import { useRef } from 'react';
import './ImageGallery.scss';

function ImageGallery({ images, name }) {
  const container = useRef(null);

  const moveScroll = (multiplier) => {
    container.current.scroll({
      left: multiplier * container.current.firstChild.clientWidth,
      behavior: 'smooth',
    });
  };
  return (
    <div className="gallery" data-testid="gallery">
      <div className="gallery__content" ref={container}>
        {images.map((image) => (
          <img className="gallery__image" key={image} src={image} alt={`Imagen de ${name}`} />
        ))}
      </div>
      <button className="gallery__previous" type="button" onClick={() => moveScroll(-1)} aria-label="Anterior imagen">&#10094;</button>
      <button className="gallery__next" type="button" onClick={() => moveScroll(1)} aria-label="Siguiente imagen">&#10095;</button>
    </div>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any),
  name: PropTypes.string.isRequired,
};

ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;
