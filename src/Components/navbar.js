import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" collapseOnSelect variant="dark" expand="lg" id="navbar">
        {/* <Navbar.Brand href={process.env.PUBLIC_URL}>
          Lugduni Desrosiers
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/#/experience"}>
              Experience
            </Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/#/projects"}>
              Projects
            </Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/#/loanCalculator"}>
              Open Source Contribution
            </Nav.Link>

            <Nav.Link href={process.env.PUBLIC_URL + "/#/full_resume"}>
              Resume
            </Nav.Link>
            <Nav.Link href={process.env.PUBLIC_URL + "/#/contact_me"}>
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
