import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SearchBar;
