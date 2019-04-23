import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#/my_cars">My Cars</Nav.Link>
            <Nav.Link href="/#loanCalculator">Loan Calculator</Nav.Link>
            <NavDropdown title="Resume" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#experience">
                Experience
              </NavDropdown.Item>
              <NavDropdown.Item href="/#projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/#full_resume">
                Full resume
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/#contact_me">
                Contact me
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
