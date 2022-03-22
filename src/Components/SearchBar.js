import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import mentors from "../MentorsDummyData";

const SearchBar = () => {
  // const [mentors, setMentors] = React.useState([]);

  //OLLIVANDERS WAND SHOP MAP EXAMPLE
  //   const wandsList = wands.map((wand) => <Card wand={wand} />);

  //   useEffect(() => {

  // setMentors(mentors);
  //   });

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">My Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <Button variant="outline-success">Search</Button>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link href="#action2" style={{ marginTop: "6px" }}>
                My Profile
              </Nav.Link> */}
                <NavDropdown title="Skill Level" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Beginner</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Intermediate
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Advanced</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Rating" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">5 Stars</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">4 Stars</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">3 Stars</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">2 Stars</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">1 Stars</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {mentors.map((mentor) => {
        return <div>{mentor.name}</div>;
      })} */}
    </div>
  );
};

export default SearchBar;
