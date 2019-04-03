import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

class Side extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={4}>
            <a href="https://www.linkedin.com/in/lugduni-desrosiers-712329177/">
              <Image src="linkedin.png" roundedCircle id="linkedinB" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <a href="https://github.com/ddunig2">
              <Image src="gitHub2.png" roundedCircle id="gitHubB" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <a href="https://varsitytutors.com">
              <Image
                src="varsityTutors.png"
                roundedCircle
                id="varsityTutorsB"
              />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Side;
