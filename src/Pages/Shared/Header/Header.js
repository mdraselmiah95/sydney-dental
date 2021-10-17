import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar
        className="mainNav"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand to="/home" className="fs-2 fw-bolder brandLogo">
            SYDNEY
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end text-center">
            <Nav.Link className="navItem" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link className="navItem" as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link className="navItem" as={HashLink} to="/home#experts">
              Experts
            </Nav.Link>
            <Link className="navItem me-2" to="/services">
              Services
            </Link>
            <Navbar.Text className="text-black">Signed in as:</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

/* 

   {user.email ? (
              <Button variant="light" className="me-2" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
*/
export default Header;
