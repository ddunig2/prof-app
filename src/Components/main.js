import React from "react";

import Home from "../pages/home";
import LoanCalculator from "../pages/loan_calculator";
import { HashRouter, Switch, Route } from "react-router-dom";
import projects from "../pages/projects";
import Experience from "../pages/experience";
import Contact_me from "../pages/contact_me";
import Full_resume from "../pages/resume";

const Main = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/loanCalculator" component={LoanCalculator} />
      <Route exact path="/projects" component={projects} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/contact_me" component={Contact_me} />
      <Route exact path="/full_resume" component={Full_resume} />
    </Switch>
  </HashRouter>
);

export default Main;
