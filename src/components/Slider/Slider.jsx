import PropTypes from 'prop-types';
import { useState } from 'react';
import './slider.scss';

const Slider = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goBack = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentSlideIndex]}
        className="slider__image"
        alt="slide image"
      />

      {images.length !== 1 && (
        <>
           <i className="fa-solid fa-chevron-left slider__arrow slider__arrow--left" onClick={goBack}></i>
           <i className="fa-solid fa-chevron-right slider__arrow slider__arrow--right" onClick={goNext}></i>
            <div className="slider__indicator">
                {currentSlideIndex + 1}/{images.length}
            </div>
        </>
      )}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;