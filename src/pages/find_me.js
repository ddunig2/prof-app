import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

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
                  src="ContactIcon.png"
                  style={{ padding: "2%", maxWidth: "300px" }}
                  alt="L"
                />
              </div>
            </Col>
            <Col>
              <div id="conectDiv" align="center">
                <h4 id="phoneN" align="left">
                  <img id="linkedinB" src="phone.jpg" alt="phone" />
                  Call me
                </h4>
              </div>
              <div id="conectDiv" align="center">
                <h4 id="email" align="left">
                  <img id="linkedinB" src="email.svg" alt="email" />
                  Email me
                </h4>
              </div>
              <div id="conectDiv" align="center">
                <h4 id="email" align="left">
                  <img id="linkedinB" src="linkedin.png" alt="linkedin" />
                  Connect via linkedIn
                </h4>
              </div>
              <div id="conectDiv" align="center">
                <h4 id="email" align="left">
                  <img id="gitHubB" src="gitHub.png" alt="github" />
                  Visit my github repos
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Find_me;
