import React from "react";

import Home from "../pages/home";
import OpenSource from "../pages/open_source";
import { HashRouter, Switch, Route } from "react-router-dom";
import projects from "../pages/projects";
import Experience from "../pages/experience";
import Find_me from "../pages/find_me";
import Full_resume from "../pages/resume";

const Main = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/open_source" component={OpenSource} />
      <Route exact path="/projects" component={projects} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/find_me" component={Find_me} />
      <Route exact path="/full_resume" component={Full_resume} />
    </Switch>
  </HashRouter>
);

export default Main;
