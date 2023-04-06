import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="danger" variant="dark" expand="lg" role="navigation">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <span role="img" aria-label="File folder" className="me-2">📁</span>
          Files App
        </BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/server-files">Server Files List</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
