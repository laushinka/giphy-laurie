import React, { Component } from 'react';
// import Request              from 'superagent';

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
    let keyword = this.state.keyword.trim();
    if(!keyword) {
      return;
    }
    // Call parent component with search term
    this.props.onSubmit(keyword);
  }
  render() {
    return (
      <div className="search-container">
        <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
          {/* Turns out don't need the value="{this.state.keyword}" attr */}
          <input className="search-bar" type="text" placeholder="Search" onChange={this.handleTextChange.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SearchBar;
