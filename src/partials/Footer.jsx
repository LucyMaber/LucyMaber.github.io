import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDiscord, FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-4">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-between">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
          </Col>
          <Col md={4} className="text-center">
            <div className="social-links">
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
