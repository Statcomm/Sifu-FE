import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CreateCat from "./CreateCat";
import api from "../stores/api";
// import { Button } from "antd";

function NavBar() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Let's Get Cooking, User!</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                style={{ color: "#DAA520" }}
                title="Bring to the Table!"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/ingredients/addIngredient">
                  Add Ingredients
                </NavDropdown.Item>
                <NavDropdown.Item href="/categories/createcat">
                  Create Category
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/recipes/createRecipe">
                  Cook Recipe
                </NavDropdown.Item>
              </NavDropdown>
              <Button variant="warning">Sign In/Up</Button>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Ghost Button</Button>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
