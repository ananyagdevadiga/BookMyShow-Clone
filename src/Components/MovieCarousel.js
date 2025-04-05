import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MovieCarousel.css';

const MovieCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel controls={true} interval={3000} indicators={false} pause="hover" fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/slide-img1.avif"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/slide-img2.avif"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/slide-img3.avif"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
