import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
