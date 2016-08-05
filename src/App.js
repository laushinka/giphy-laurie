import React, { Component } from 'react';
// import logo                 from './logo.svg';
import './App.css';
// import Request              from 'superagent';
import Search               from './components/Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search />
          <h2>HARROOOO</h2>
        </div>
      </div>
    );
  }
}

export default App;
