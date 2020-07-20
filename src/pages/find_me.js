import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Find_me extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 align="center">
          <Image src="contactme.png" id="CM" />
        </h3>
        <div id="con">
          <div align="center">
            <Image src="phone.png" id="CMP" />
            <h1 id="phoneN">845-596-8656</h1>
          </div>
          <div align="center">
            <Image src="email.png" id="CME" />
            <h1 id="email">duni.dd@gmail.com</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Find_me;
