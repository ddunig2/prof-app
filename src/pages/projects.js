import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="pdiv">
        <Row>
          <Col align="center">
            <Card
              id="cardId"
              style={{
                width: "18rem",
                margin: "2rem",
              }}
              bg="secondary"
              text="white"
            >
              <Card.Header>Api</Card.Header>
              <Card.Img variant="top" src="golang.png" id="expCp" />
              <Card.Body>
                <Card.Title>Go</Card.Title>
                <Card.Text>
                  Backend API to for dataBase. This Project is not yet posted on
                  github.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col align="center">
            <a href="https://github.com/ddunig2/Translator">
              <Card
                style={{ width: "18rem", margin: "2rem" }}
                bg="primary"
                text="white"
              >
                <Card.Header>Translator</Card.Header>
                <Card.Img variant="top" src="translator.png" id="expCp" />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    This translator uses google translate API to translate
                    between English and Spanish.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col align="center">
            <a href="https://github.com/ddunig2/Loan-calculator">
              <Card
                style={{ width: "18rem", margin: "2rem" }}
                bg="info"
                text="white"
              >
                <Card.Header>Loan Calculator</Card.Header>
                <Card.Img variant="top" src="loancalc2.png" id="expCp" />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    A loan calculator similar to the one on this website.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <br />
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <a href="https://github.com/ddunig2/MonopolyProject">
              <Card
                style={{ width: "18rem", margin: "2rem" }}
                bg="warning"
                text="white"
              >
                <Card.Header>Monopoly Game</Card.Header>
                <Card.Img variant="top" src="mono.png" id="expCp" />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    A monopoly game that applies the rules of a standard game
                    rules.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col align="center">
            <a href="https://github.com/ddunig2/Tic-Tac-Toe-game">
              <Card
                style={{ width: "18rem", margin: "2rem" }}
                bg="dark"
                text="white"
              >
                <Card.Header>Tic Toc Toe</Card.Header>
                <Card.Img variant="top" src="ttt.png" id="expCp" />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    Tic Toc Toe is a very simple game and so is this app/project
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col align="center">
            <Card style={{ width: "18rem", margin: "2rem" }} bg="danger">
              <Card.Header>Flight Reservation System</Card.Header>
              <Card.Img variant="top" src="androidS2.png" id="expCp" />
              <Card.Body>
                <Card.Title>Java</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
