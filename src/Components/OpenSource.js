import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../OsStyle.css";

class OSProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="osp">
        <img
          src={this.props.image}
          alt={this.props.image}
          width="40%"
          height="20%"
        />
        {this.props.children}
      </div>
    );
  }
}

class OSContribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "desc",
    };
  }

  clickedHeading = () => {
    if (this.state.desc === "desc" || this.state.desc === "descC") {
      this.setState({ desc: "descO" });
    } else {
      this.setState({ desc: "descC" });
    }
  };

  render() {
    return (
      <div id="osc">
        <Row id="heading">
          <div id="leftbar" onClick={this.clickedHeading}></div>
          <h7 style={{ margin: "auto" }}>{this.props.heading}</h7>
          <div
            id="flexDiv"
            style={{
              height: "100%",
              right: "0%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <a href={this.props.pullLink} target="_blank" id="issue">
              {this.props.issue}
            </a>
            <a id="pr" href={this.props.pullLink} target="_blank">
              {this.props.pull}
            </a>
          </div>
        </Row>
        <div id={this.state.desc}>
          sdfasfd asdf asdfasdfasdfa
          <br></br>sdfasdfasdfasdfasdfasdfasdfa sdfasdfasdf <br></br>
          asdfasdfasdfasdfas
          <br></br>dfasdfasdfasdfasd
          <br></br>fasdfaasdf as df
        </div>
      </div>
    );
  }
}

export { OSProject, OSContribution };
