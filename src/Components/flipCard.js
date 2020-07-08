import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { StyleRoot } from "radium";
import Timeline from "../TimeLine/timeline";
import Footer from "../Components/footer";

class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="pdiv">
        <StyleRoot>
          <Timeline animations={true}>
            <div icon="'20" id="expCp">
              <time>October 2020</time>
              <h4>Incoming Software Engineer @Google</h4>
              <img src="google.png" alt="" width="90%" height="30%" />
            </div>
            <div icon="'20">
              <time>September 2018 - Current employer</time>
              <h4>Computer Science Tutor @Varsity Tutors</h4>
              <img src="VT.png" alt="" width="90%" height="30%" />
            </div>
            <div icon="'19">
              <h4>Compuer Science Intern @Brookhaven National Laboratory</h4>
              <img src="bnl.png" alt="" width="90%" height="30%"></img>
            </div>
            <div icon="'18">
              <h4>Compuer Science Intern @Sant Thomas Aquinas College</h4>
              <img src="STAC.png" alt="" width="90%" height="30%"></img>
            </div>
          </Timeline>
        </StyleRoot>
        <Footer></Footer>
      </div>
    );
  }
}

export default FlipCard;
