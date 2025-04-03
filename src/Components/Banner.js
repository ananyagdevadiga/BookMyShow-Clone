import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css"; // Import CSS for styling

const Banner = () => {
  return (
    <Container className="banner-container">
      <img
        src="/stream-banner.avif" // Replace with actual banner image URL
        alt="BookMyShow Stream Banner"
        className="banner-image"
      />
    </Container>
  );
};

export default Banner;
