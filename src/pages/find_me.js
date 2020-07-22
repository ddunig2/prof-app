import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";

class Find_me extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="homeDiv">
        <div id="Page_container">
          <h1 id="findMeB">Connect</h1>
          <Row>
            <Col>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  src="contactIcon.png"
                  style={{ padding: "2%", maxWidth: "400px" }}
                />
              </div>
            </Col>
            <Col>
              <div id="conectDiv" align="center">
                <h3 id="phoneN" align="left">
                  <img id="linkedinB" src="phone.jpg" />
                  Call me
                </h3>
              </div>
              <div id="conectDiv" align="center">
                <h3 id="email" align="left">
                  <img id="linkedinB" src="email.svg" />
                  Email me
                </h3>
              </div>
              <div id="conectDiv" align="center">
                <h3 id="email" align="left">
                  <img id="linkedinB" src="linkedin.png" />
                  Connect via linkedIn
                </h3>
              </div>
              <div id="conectDiv" align="center">
                <h3 id="email" align="left">
                  <img id="gitHubB" src="github.png" />
                  Visit my github repos
                </h3>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Find_me;
