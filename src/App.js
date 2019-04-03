import React, { Component } from "react";
import logo from "./logo.svg";
import Main from "./Components/main";
import Side from "./Components/side";
import Projects from "./pages/projects";
import Footer from "./Components/footer";
//import "./App.css";

import Navigation from "./Components/navbar";
import Home from "./pages/home";
import LoanCalculator from "./pages/loan_calculator";

class App extends Component {
  render() {
    return (
      <div id="root1">
        <Navigation />
        <Side />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
