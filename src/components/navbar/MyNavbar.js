import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="justify-content-end">
          <Nav variant="pills">
            <Nav.Item>
              <Button variant="dark">
                <Link to="/">Home</Link>
              </Button>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "10px" }}>
              <Button variant="dark">
                <Link to="/createboard">createboard</Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
