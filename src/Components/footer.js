import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getY() {
    var date = new Date();
    return date.getFullYear;
  }
  render() {
    var date = new Date().getFullYear();
    return (
      <div id="footer">
        <h5>Created by: Lu</h5>
        <p>
          <p>LuGotCashInc | Copyright &copy; {date}</p>
        </p>
      </div>
    );
  }
}

export default Footer;
