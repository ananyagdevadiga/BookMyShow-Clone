import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <Container fluid className="banner-container">
        <img
          src="/stream-banner.avif"
          alt="BookMyShow Stream Banner"
          className="banner-image"
        />
      </Container>
    </div>
  );
};

export default Banner;
