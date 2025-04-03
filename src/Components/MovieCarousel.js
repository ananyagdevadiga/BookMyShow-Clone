import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MovieCarousel.css'; // Ensure this CSS file contains your custom styles

const MovieCarousel = () => {
  return (
    <Carousel controls={true} interval={1000} indicators={false} pause="hover">
      {/* First Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/slide-img1.avif"
          alt="First slide"
        />
        {/* <Carousel.Caption className="carousel-caption"> */}
          {/* <h3>First Slide Title</h3> */}
          {/* <p>Description of the first slide</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/slide-img2.avif"
          alt="Second slide"
        />
        {/* <Carousel.Caption className="carousel-caption"> */}
          {/* <h3>Second Slide Title</h3> */}
          {/* <p>Description of the second slide</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/slide-img3.avif"
          alt="Third slide"
        />
        {/* <Carousel.Caption className="carousel-caption"> */}
          {/* <h3>Third Slide Title</h3> */}
          {/* <p>Description of the third slide</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
