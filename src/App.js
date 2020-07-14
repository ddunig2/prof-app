import React, { Component } from "react";
import Main from "./Components/main";

import Navigation from "./Components/navbar";

class App extends Component {
  render() {
    return (
      <div id="root1">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
