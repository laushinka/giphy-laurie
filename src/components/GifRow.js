import React, { Component } from 'react';
// import GifObject from './GifObject.js';

class GifRow extends Component {
  render() {
    var gif = this.props.gif;
    return(
      <tr>
        <td><img src={gif} /></td>
      </tr>
    );
  }
}

export default GifRow;
