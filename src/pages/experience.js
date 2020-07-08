import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { StyleRoot } from "radium";
import Timeline from "../TimeLine/timeline";
import Footer from "../Components/footer";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="pdiv">
        <StyleRoot>
          <Timeline animations={true}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <time>October 2020</time>
                  <h4>Incoming Software Engineer @Google</h4>
                  <img src="google.png" alt="" width="90%" height="60%" />
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Job descrition</p>
                </div>
              </div>
            </div>
            <div class="flipCard">
              <div icon="'20">
                <time>October 2020</time>
                <h4>Incoming Software Engineer @Google</h4>
                <img src="google.png" alt="" width="90%" height="30%" />
              </div>
            </div>
            <div icon="'20">
              <time>September 2018 - Current employer</time>
              <h4>Computer Science Tutor @Varsity Tutors</h4>
              <img src="VT.png" alt="" width="90%" height="30%" />
            </div>
            <div icon="'19">
              <h4>Compuer Science Intern @Brookhaven National Laboratory</h4>
              <img src="bnl.png" alt="" width="90%" height="30%"></img>
            </div>
            <div icon="'18">
              <h4>Compuer Science Intern @Sant Thomas Aquinas College</h4>
              <img src="STAC.png" alt="" width="90%" height="30%"></img>
            </div>
          </Timeline>
        </StyleRoot>
        <Footer></Footer>

        {/*
        <Row>
          <Col align="center">
            <Card
              style={{ width: "18rem", margin: "2rem" }}
              bg="secondary"
              text="white"
            >
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
          <Col align="center">
            <Card
              style={{ width: "18rem", margin: "2rem" }}
              bg="primary"
              text="white"
            >
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
          <Col align="center">
            <Card
              style={{ width: "18rem", margin: "2rem" }}
              bg="danger"
              text="white"
            >
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
        </Row>*/}
      </div>
    );
  }
}

export default Experience;
