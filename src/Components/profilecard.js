import React, { Component } from "react";
import { Card } from "react-bootstrap";

class ProfileCard extends Component {
  state = {};
  render() {
    return (
      <Card bg="warning" style={{ width: "18rem" }} id="profileCard">
        <Card.Img variant="top" src="profile.jpg" />
        <Card.Body>
          <Card.Title>St. Thomas Aquinas College</Card.Title>
          <Card.Text>
            Year: Junior
            <br />
            GPA: 3.5
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileCard;
