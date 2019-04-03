import React from "react";

import Home from "../pages/home";
import LoanCalculator from "../pages/loan_calculator";
import My_cars from "../pages/my_cars";
import { Switch, Route } from "react-router-dom";
import projects from "../pages/projects";
import Experience from "../pages/experience";
import Contact_me from "../pages/contact_me";
import Full_resume from "../pages/resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/my_cars" component={My_cars} />
    <Route path="/loanCalculator" component={LoanCalculator} />
    <Route path="/projects" component={projects} />
    <Route path="/experience" component={Experience} />
    <Route path="/contact_me" component={Contact_me} />
    <Route path="/full_resume" component={Full_resume} />
  </Switch>
);

export default Main;
