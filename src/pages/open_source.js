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
            issue="issue#6639"
            issueLink="https://github.com/JabRef/jabref/issues/6639"
            pull="pull#6719"
            pullLink="https://github.com/JabRef/jabref/pull/6719"
          ></OSContribution>
          <OSContribution
            heading="UI Enhancement"
            issue="issue#5479"
            issueLink="https://github.com/JabRef/jabref/issues/5479"
            pull="pull#5489"
            pullLink="https://github.com/JabRef/jabref/pull/5789"
          ></OSContribution>
        </OSProject>
        <OSProject name="RxJava" image="rxjava.png" link="a">
          <OSContribution
            heading="Test Failure"
            issue="issue#7001"
            issueLink="https://github.com/ReactiveX/RxJava/issues/7001"
            pull="pull#7028"
            pullLink="https://github.com/ReactiveX/RxJava/pull/7028"
          ></OSContribution>
          <OSContribution
            heading="Backporting"
            issue="issue#5479"
            issueLink="https://github.com/JabRef/jabref/issues/5479"
            pull="pull#5789"
            pullLink="https://github.com/JabRef/jabref/pull/5789"
          ></OSContribution>
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
