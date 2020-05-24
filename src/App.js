import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./views/index";
import AllList from "./views/all-list/index";
import AboutMe from "./views/about/index";
import AcList from "./views/aclist";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={AllList} />
          <Route path="/acList" component={AcList} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
