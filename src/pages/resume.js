import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <embed
          src="Resume.pdf#toolbar"
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div>
    );
  }
}

export default Resume;
