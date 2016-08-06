import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
  }
  handleTextChange(e) {
    this.setState({keyword: e.target.value});
    debugger
  }
  render() {
    return (
      <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search" value={this.state.keyword} onChange={this.handleTextChange.bind(this)}/>
          <input type="submit" />
      </div>
    );
  }
};

export default SearchBar;
