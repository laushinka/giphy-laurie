import React, { Component } from 'react';
// import GifObject from './GifObject.js';

class GifRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    }
  }
  handleMouseMovement(e) {
    // e.preventDefault();
    this.setState({isHovering: !this.state.isHovering})
  }
  // handleMouseOut(e) {
  //   e.preventDefault();
  //   this.setState({
  //     isHovering: false
  //   })
  // }
  render() {

    var img = this.props.img;
    var gif = this.props.gif;
    var source = this.state.isHovering ? gif : img
    return(
      <tr>
        <td>
          <img src={source}
          onMouseOver={this.handleMouseMovement.bind(this)}
          onMouseOut={this.handleMouseMovement.bind(this)} />
        </td>
      </tr>
    )
    // if (this.state.isHovering) {
    //   return(
    //     <tr>
    //       <td><img onMouseOut={this.handleMouseMovement.bind(this)} src={gif} /></td>
    //     </tr>
    //   )
    // } else {
    //   return(
    //     <tr>
    //       <td><img onMouseOver={this.handleMouseMovement.bind(this)} src={img} /></td>
    //     </tr>
    //   )
    // }
  }
}

export default GifRow;
