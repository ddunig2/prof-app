import React, { Component } from "react";
import { OSProject, OSContribution } from "../Components/OpenSource";
import Footer from "../Components/footer";
import "../OsStyle.css";

class Open_source extends Component {
  render() {
    return (
      <div id="pdiv">
        <OSProject name="Jabref" image="jabref1.png" link="a">
          <OSContribution
            heading="UI Enhancement"
            issue="issue#5479"
            issueLink="https://github.com/JabRef/jabref/issues/5479"
            pull="pull#5789"
            pullLink="https://github.com/JabRef/jabref/pull/5789"
          ></OSContribution>
          <OSContribution
            heading="UI Enhancement"
            issue="issue#5479"
            issueLink="https://github.com/JabRef/jabref/issues/5479"
            pull="pull#5789"
            pullLink="https://github.com/JabRef/jabref/pull/5789"
          ></OSContribution>
        </OSProject>
        <OSProject name="RxJava" image="rxjava.png" link="a">
          <OSContribution issue="issue" link="a"></OSContribution>
          <OSContribution issue="issue" link="a"></OSContribution>
        </OSProject>
        <OSProject name="RxJava" image="rxjava.png" link="a">
          <OSContribution issue="issue" link="a"></OSContribution>
          <OSContribution issue="issue" link="a"></OSContribution>
        </OSProject>
        <Footer></Footer>
        {/*<div id="opsCard">
          <img
            id="opsCardImg"
            src="Jabref1.png"
            alt=""
            width="20%"
            height="10%"
          />
          <div>- fixed layout issue</div>
        </div>
        <div id="opsCard">
          <img
            id="opsCardImg"
            src="rxjava.png"
            alt=""
            width="20%"
            height="10%"
          />
          <div>- fixed test failure</div>
          <div>- backporting</div>
        </div>
    <Footer></Footer>*/}
      </div>
    );
  }
}

export default Open_source;
