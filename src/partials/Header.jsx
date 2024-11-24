import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="p-3 mb-3">
    <style>
      
    </style>
      <Container>
        <Navbar.Brand href="/" aria-label="Lucy Maber Logo">
          <span className="text-light">Lucy Maber</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} /> */}
        <div id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="/Project.html" onClick={() => setExpanded(false)}>Project</Nav.Link>
            <Nav.Link href="/CVPage.html" onClick={() => setExpanded(false)}>CV </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
