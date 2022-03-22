import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (

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
