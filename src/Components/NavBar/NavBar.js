import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Navbar className="bg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
    // <div>
    //   <Navbar bg="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <img
    //           src="http://lifesifu.com/wp-content/uploads/2018/02/Logomakr_7YeZnA.png"
    //           width="105"
    //           height="46"
    //           className="d-inline-block align-top"
    //           alt="Sifu Logo"
    //         />
    //       </Navbar.Brand>
    //     </Container>
    //   </Navbar>
    // </div>
  );
}

export default NavBar;
