import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Matrix</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link>Category</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/search"}>
              <Nav.Link >Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/alternative"}>
              <Nav.Link>Alternative</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/new"}>
              <Nav.Link>New Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
