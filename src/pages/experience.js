import React, { Component } from "react";
import { StyleRoot } from "radium";
import Timeline from "../TimeLine/timeline";
import Footer from "../Components/footer";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="pdiv">
        <StyleRoot>
          <Timeline id="timeline">
            <div class="flip-card" icon="'20">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <time>October 2020</time>
                  <h4>Incoming Software Engineer @Google</h4>
                  <img src="google.png" alt="" width="90%" height="60%" />
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Job descrition</p>
                </div>
              </div>
            </div>

            <div class="flip-card" icon="'19">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <time>September 2018 - Current employer</time>
                  <h4>Computer Science Tutor @Varsity Tutors</h4>
                  <img src="VT.png" alt="" width="90%" height="30%" />
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Job descrition</p>
                </div>
              </div>
            </div>
            <div class="flip-card" icon="'19">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <time>June 2019 - August 2019</time>
                  <h4>
                    Compuer Science Intern @Brookhaven National Laboratory
                  </h4>
                  <img src="bnl.png" alt="" width="90%" height="30%"></img>
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Job descrition</p>
                </div>
              </div>
            </div>

            <div class="flip-card" icon="'18">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <time>August 2018 - August 2018</time>
                  <h4>Compuer Science Intern @Saint Thomas Aquinas College</h4>
                  <img src="STAC.png" alt="" width="90%" height="30%"></img>
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Job descrition</p>
                </div>
              </div>
            </div>
          </Timeline>
        </StyleRoot>
        <Footer></Footer>
      </div>
    );
  }
}

export default Experience;
