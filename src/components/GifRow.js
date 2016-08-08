import React, { Component } from 'react';
// import GifObject from './GifObject.js';

class GifRow extends Component {
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
    debugger;
    if (this.state.isHovering) {
      return(
        <tr>
          <td><img src={gif} /></td>
        </tr>
      )
    } else {
      return(
        <tr>
          <td><img src={img} /></td>
        </tr>
      )
    }
  }
}

export default GifRow;
