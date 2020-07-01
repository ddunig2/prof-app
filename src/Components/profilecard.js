import React, { Component } from "react";
import { Card } from "react-bootstrap";

class ProfileCard extends Component {
  state = {};
  render() {
    return (
      <div id="profileCard1">
        <Card bg="warning" id="profileCard">
          <Card.Img variant="top" src="profile.jpg" id="profileImg" />
          <Card.Body>
            <Card.Title>St. Thomas Aquinas College</Card.Title>
            <Card.Text>GPA: 3.61</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
