import React, { Component } from "react";
import Main from "./Components/main";
import Side from "./Components/side";
import Footer from "./Components/footer";

import Navigation from "./Components/navbar";

class App extends Component {
  render() {
    return (
      <div id="root1">
        <Navigation />
        {/*<Side />*/}
        <Main />
      </div>
    );
  }
}

export default App;
