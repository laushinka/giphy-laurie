import React, { Component } from 'react';

class GifObject extends Component {
  render() {
    var gif = this.props.gif;
    return(
      <td><img src={gif} /></td>
    )
  }
}
