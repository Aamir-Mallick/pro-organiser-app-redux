import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Pro-Organiser</Navbar.Brand>
        <Container className="justify-content-end">
          <Nav variant="pills">
            <Nav.Item>
              <Link to="/">
                <Button variant="dark"> Home</Button>
              </Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "10px" }}>
              <Link to="/createboard">
                <Button variant="dark">Create Board</Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
