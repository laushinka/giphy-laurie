import React, { Component } from 'react';
// import logo                 from './logo.svg';
import './App.css';
import Request              from 'superagent';
import Search               from './components/Search.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  searchTerm(keyword) {
  var url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC`;
  Request.get(url, function(err,res) {
    console.log(res.body.data[0]);
  });
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
