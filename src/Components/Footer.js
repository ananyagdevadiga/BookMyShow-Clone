import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaHeadset,
  FaStore,
  FaTicketAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <Container className="text-center text-md-start footer-top border-bottom pb-3">
        <Row className="justify-content-between align-items-center">
          <Col xs={6} md={2} className="text-center">
            <FaStore size={20} />
            <p>List your Show</p>
          </Col>
          <Col xs={6} md={2} className="text-center">
            <FaHeadset size={20} />
            <p>24/7 Customer Care</p>
          </Col>
          <Col xs={6} md={2} className="text-center">
            <FaTicketAlt size={20} />
            <p>Booking Confirmation</p>
          </Col>
          <Col xs={6} md={2} className="text-center">
            <FaEnvelope size={20} />
            <p>Subscribe to the Newsletter</p>
          </Col>
          <Col md={2} className="text-center">
            <Button variant="danger" size="sm">Contact Today!</Button>
          </Col>
        </Row>
      </Container>

      {/* Middle Section */}
      <Container className="py-3 footer-middle">
        <Row>
          <Col md={4}>
            <h6>MOVIES NOW SHOWING</h6>
            <p><a href="#">Sikandar</a> | <a href="#">L2: Empuraan</a> | <a href="#">Mad Square</a></p>
          </Col>
          <Col md={4}>
            <h6>MOVIES BY GENRE</h6>
            <p><a href="#">Drama</a> | <a href="#">Action</a> | <a href="#">Thriller</a></p>
          </Col>
          <Col md={4}>
            <h6>MOVIES BY LANGUAGE</h6>
            <p><a href="#">English</a> | <a href="#">Hindi</a> | <a href="#">Kannada</a></p>
          </Col>
        </Row>
      </Container>

      {/* Bottom Section */}
      <Container className="footer-bottom text-center">
        <img src="main-bms-logo-2.png" alt="BookMyShow" className="footer-logo mb-3" />

        <div className="social-icons gap-3 mb-3">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
        <p className="mb-0">&copy; 2025 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
