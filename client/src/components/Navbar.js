import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, logout } from "../auth";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const LoggedInLinks = () => {
  const history = useNavigate();

  return (
    <>
      <Nav.Item>
        <Link className="nav-link" to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/reward">My Rewards</Link>
      </Nav.Item>
      <Nav.Item>
        <Button variant="link" className="nav-link"
          onClick={() => {
            fetch("/auth/logout/")
              .then((res) => res.json())
              .then((data) => {
                alert("Logged out");
                console.log(data);
              })
              .catch((err) => console.log(err))
              .finally(() => {
                logout();
                history("/");
              });
          }}
        >Log Out</Button>
      </Nav.Item>
    </>
  );
};

const LoggedOutLinks = () => (
  <>
    <Nav.Item>
      <Link className="nav-link" to="/">Home</Link>
    </Nav.Item>
    <Nav.Item>
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </Nav.Item>
    <Nav.Item>
      <Link className="nav-link" to="/login">Login</Link>
    </Nav.Item>
  </>
);

const NavBar = () => {
  const [logged] = useAuth();

  return (
    <Container>
      <Navbar expand="md" bg="white" variant="light">
        <img src="/logo-pabrikonline-colored.png" alt="logo"/>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;