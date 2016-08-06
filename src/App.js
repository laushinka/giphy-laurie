import React, { Component } from 'react';
// import logo                 from './logo.svg';
import './App.css';
// import Request              from 'superagent';
import Search               from './components/Search.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }
  render() {
    return (
      <div>
          <h2>HARROOOO</h2>
          <Search />
      </div>
    );
  }
}

export default App;
