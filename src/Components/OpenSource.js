import React, { Component } from "react";
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
    console.log(document.getElementById("desc").offsetWidth);
    if (this.state.desc === "desc" || this.state.desc === "descC") {
      this.setState({ desc: "descO" });
    } else {
      this.setState({ desc: "descC" });
    }
  };

  render() {
    return (
      <div id="osc">
        <div id="heading" onClick={this.clickedHeading}>
          <div id="leftbar"></div>
        </div>
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
