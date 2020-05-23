import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Article from "./components/Article/";
import "./App.css";
// import Data from "./data.json";
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
          <Route path="/about" component={AboutMe}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
