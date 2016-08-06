import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
  }
  handleTextChange(e) {
    this.setState({keyword: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var keyword = this.state.keyword.trim();
    this.setState({keyword: ""});
  }
  render() {
    return (
      <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search" value={this.state.keyword} onChange={this.handleTextChange.bind(this)}/>
          <input type="submit" onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
};

export default SearchBar;
