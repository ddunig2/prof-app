import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div align="center">
        <Card id="cardId" bg="secondary" text="white">
          <Card.Header
            style={{
              backgroundColor: "transparent",
            }}
          >
            {this.props.header}
          </Card.Header>
          <Card.Img variant="top" src={this.props.image} id="expCp" />
          <Card.Body>
            <Card.Title>{this.props.lang}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Project;
