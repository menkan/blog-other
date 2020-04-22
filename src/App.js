import React from 'react';
import {  } from 'react-dom'
import Article from './components/Article/'
import './App.css';
import Data from './data.json'
function App() {
  return (
    <div className="App">
      <Article data={Data} />
    </div>
  );
}

export default App;
