import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Article from './components/Article/'
import './App.css';
import Data from './data.json'
import Home from './views/index'
import AcList from './views/aclist'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/acList">去文章页面</Link>
        <Switch>
          <Route exact path="/" component={Home}>home</Route>
          <Route path="/acList" component={AcList}>aclist</Route>
        </Switch>
        {/* <Article data={Data} /> */}
        <Home />
      </div>
    </Router>
  );
}

export default App;
