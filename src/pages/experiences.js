import React, { Component } from "react";
import { StyleRoot } from "radium";
import Timeline from "../TimeLine/timeline";
import Footer from "../Components/footer";
import Experience from "../Components/Experience";

class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="pdiv">
        <StyleRoot>
          <Timeline id="timeline">
            <Experience
              icon="'20"
              date="October 2020"
              title="Incoming Software Engineer"
              company="Google"
              image="google.png"
              descT="Engineering Resident"
              desc="Job Discription"
            ></Experience>

            <Experience
              icon="'19"
              date="September 2018 - Current employer"
              title="Tutor"
              company="Varsity Tutors"
              image="VT.png"
              descT="Computer Science Tutor"
              desc="Job Discription"
            ></Experience>

            <Experience
              icon="'19"
              date="June 2019 - August 2019"
              title="Compuer Science Intern"
              company="Brookhaven National Laboratory"
              image="bnl.png"
              descT="JD"
              desc="Job Discription"
            ></Experience>

            <Experience
              icon="'18"
              date="August 2018 - August 2018"
              title="Compuer Science Intern"
              company="Saint Thomas Aquinas College"
              image="STAC.png"
              descT="JD"
              desc="Job Discription"
            ></Experience>
          </Timeline>
        </StyleRoot>
        <Footer></Footer>
      </div>
    );
  }
}

export default Experiences;
