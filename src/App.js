import React, { Component } from 'react';
// import logo                 from './logo.svg';
import './App.css';
import Request              from 'superagent';
import SearchBar            from './components/SearchBar.js'
import GifContainer         from './components/GifContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }
  // handle search from SearchComponent
  handleSubmit(keyword) {
  //   $.ajax({
  //    url: `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC`,
  //    method: "GET",
  //    success: ((data) => {
  //      this.setState({gifs: data.data});
  //      //var gifs = data.data[0].images.original.url
  //      //debugger;
  //    }),
  //    error: ((data) => {
  //      alert("Not successful")
  //    })
  //  });
  var url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC`;
  Request.get(url, (err, res) => {
    this.setState({gifs: res.body.data});
  });
  }

  render() {
    return (
      <div>
        <h1>Gifs</h1>
        <SearchBar onSubmit={this.handleSubmit.bind(this)} />
        <GifContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
