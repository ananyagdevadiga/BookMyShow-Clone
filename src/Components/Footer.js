import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaHeadset, FaStore, FaTicketAlt } from "react-icons/fa";
import "./Footer.css"; // Import CSS for additional styling

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      {/* Top Section */}
      <Container className="text-center text-md-start">
        <Row className="justify-content-between align-items-center border-bottom pb-3">
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
            <p>Resend Booking Confirmation</p>
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
      <Container className="py-3">
        <Row>
          <Col md={4}>
            <h6 className="text-muted">MOVIES NOW SHOWING</h6>
            <p><a href="#" className="text-light">Sikandar</a> | <a href="#" className="text-light">L2: Empuraan</a> | <a href="#" className="text-light">Mad Square</a></p>
          </Col>
          <Col md={4}>
            <h6 className="text-muted">MOVIES BY GENRE</h6>
            <p><a href="#" className="text-light">Drama</a> | <a href="#" className="text-light">Action</a> | <a href="#" className="text-light">Thriller</a></p>
          </Col>
          <Col md={4}>
            <h6 className="text-muted">MOVIES BY LANGUAGE</h6>
            <p><a href="#" className="text-light">English</a> | <a href="#" className="text-light">Hindi</a> | <a href="#" className="text-light">Kannada</a></p>
          </Col>
        </Row>
      </Container>

      {/* Bottom Section */}
      <Container className="text-center border-top pt-3">
        <div className="d-flex justify-content-center gap-3 mb-2">
          <a href="#" className="text-light"><FaFacebook size={20} /></a>
          <a href="#" className="text-light"><FaTwitter size={20} /></a>
          <a href="#" className="text-light"><FaInstagram size={20} /></a>
          <a href="#" className="text-light"><FaYoutube size={20} /></a>
          <a href="#" className="text-light"><FaLinkedin size={20} /></a>
        </div>
        <p className="mb-0">&copy; 2025 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
