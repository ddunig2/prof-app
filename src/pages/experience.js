import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="pdiv">
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }} bg="secondary" text="white">
              <Card.Header>Intern</Card.Header>
              <Card.Img variant="top" src="DOE.jpg" id="expCp" />
              <Card.Body>
                <Card.Title>SULI</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }} bg="primary" text="white">
              <Card.Header>Computer Science Tutor</Card.Header>
              <Card.Img variant="top" src="VTL.png" id="expCp" />
              <Card.Body>
                <Card.Title>Varsity Tutors</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }} bg="danger" text="white">
              <Card.Header>Intern</Card.Header>
              <Card.Img variant="top" src="STAC.png" id="expCp" />
              <Card.Body>
                <Card.Title>STEM Camp</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Experience;
