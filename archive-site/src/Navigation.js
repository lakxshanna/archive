import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
    <Container>
        <Navbar.Brand href="#home">We Shall Not Be Moved</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection('landing')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('map')}>Map</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('music')}>Sounds of the encampment</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('documentary')}>Documentary</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default Navigation;
