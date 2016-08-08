import React, { Component } from 'react';
// import GifObject from './GifObject.js';

class GifRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    }
  }
  handleMouseOver(e) {
    e.preventDefault();
    this.setState({
      isHovering: true
    })
  }
  handleMouseOut(e) {
    e.preventDefault();
    this.setState({
      isHovering: false
    })
  }
  render() {
    var img = this.props.img;
    var gif = this.props.gif;
    if (this.state.isHovering) {
      return(
        <tr>
          <td><img onMouseOut={this.handleMouseOut.bind(this)} src={gif} /></td>
        </tr>
      )
    } else {
      return(
        <tr>
          <td><img onMouseOver={this.handleMouseOver.bind(this)} src={img} /></td>
        </tr>
      )
    }
  }
}

export default GifRow;
