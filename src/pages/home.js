import React, { Component } from "react";
import Home1 from "../Components/profilecard";
import Footer from "../Components/footer";
import { Row, Col, Badge } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div id="homeDiv">
        <div id="Page_container">
          <h1 id="nameB">Lugduni Desrsiers</h1>
          <Home1 id="profileCard1" />
          <div id="lang">
            <h2>
              <Badge pill variant="warning">
                Java
              </Badge>
              <Badge pill variant="warning">
                Python
              </Badge>
              <Badge pill variant="warning">
                GO
              </Badge>
              <Badge pill variant="warning">
                C++
              </Badge>
              <Badge pill variant="warning">
                C#
              </Badge>
              <Badge pill variant="warning">
                Javascript
              </Badge>
              <Badge pill variant="warning">
                HTML
              </Badge>
              <Badge pill variant="warning">
                CSS
              </Badge>
              <Badge pill variant="warning">
                Java
              </Badge>
            </h2>
          </div>
          <div id="aboutme">
            <h1>About me</h1>
            <p>
              Early in my college studies, I quickly realized that our world is
              quickly and inevitably going <br />
              through technilogiclal advancements. I have made it my soul
              purpose to leap into this fast pace
              <br />
              world ready to contribute to those advancements.
            </p>
            <h1>Quick quotes</h1>
            <q>
              Our greatest glory is not in never falling, but in rising every
              time we fall. — Confucius
            </q>
            <br />
            <br />
            <q id="longQ">
              Our deepest fear is not that we are inadequate. Our deepest fear
              is that we are powerful beyond measure. It is our light, not our
              darkness, that most frightens us. Your playing small does not
              serve the world. There is nothing enlightened about shrinking so
              that other people won't feel insecure around you. We are all meant
              to shine as children do. It's not just in some of us; it is in
              everyone. And as we let our own lights shine, we unconsciously
              give other people permission to do the same. As we are liberated
              from our own fear, our presence automatically liberates others."{" "}
              <br />
              —Marianne Williamson
            </q>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
