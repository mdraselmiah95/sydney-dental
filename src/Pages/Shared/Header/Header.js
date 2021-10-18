import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
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
            <Nav.Link className="navItem" as={HashLink} to="/home#resource">
              Resource
            </Nav.Link>
            <Link className="navItem me-2" to="/experts">
              Experts
            </Link>
            <Link className="navItem me-2" to="/care">
              Care
            </Link>
            {user.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Link className="navItem me-2" to="/login">
                LogIn
              </Link>
            )}
            <Navbar.Text className="text-black d-flex align-items-center justify-content-center">
              <a href="#login">
                {user?.displayName}{" "}
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="img-fluid w-25 rounded-circle ms-2"
                />
              </a>
            </Navbar.Text>
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
