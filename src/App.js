import React from 'react';
// import {  } from 'react-dom'
import Article from './components/Article/'
import './App.css';
import Data from './data.json'
import Home from './views/index'
function App() {
  return (
    <div className="App">
      {/* <Article data={Data} /> */}
      <Home />
    </div>
  );
}

export default App;
