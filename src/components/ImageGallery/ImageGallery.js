import PropTypes from 'prop-types';
import { useMemo, useRef, useState } from 'react';
import './ImageGallery.scss';

function ImageGallery({ images, name }) {
  const container = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(1);

  const isFirstImage = useMemo(() => currentIndex === 1, [currentIndex]);
  const isLastImage = useMemo(() => currentIndex === images.length, [currentIndex]);

  const moveScroll = (multiplier) => {
    const imageSize = container.current.firstChild.clientWidth;
    const newScrollPosition = container.current.scrollLeft + (imageSize * multiplier);

    container.current.scroll({
      left: newScrollPosition,
      behavior: 'smooth',
    });

    setCurrentIndex(currentIndex + multiplier);
  };

  return (
    <div className="gallery" data-testid="gallery">
      <div className="gallery__content" ref={container}>
        {images.map((image) => (
          <img className="gallery__image" key={image} src={image} alt={`Imagen de ${name}`} loading="lazy" />
        ))}
      </div>
      { !isFirstImage && <button className="gallery__previous" type="button" onClick={() => moveScroll(-1)} aria-label="Anterior imagen">&#10094;</button> }
      { !isLastImage && <button className="gallery__next" type="button" onClick={() => moveScroll(1)} aria-label="Siguiente imagen">&#10095;</button> }
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
