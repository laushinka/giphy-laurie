import React, { Component } from 'react';
import GifRow from './GifRow.js';

class GifContainer extends Component {
  render(){
    var gifs = this.props.gifs;
    var rows = [];
    for (var i = 0; i < gifs.length / 4; i += 4) {
      console.log(gifs[i]);
      if (gifs[i].images)
        rows.push(<GifRow key={gifs[i].id} gif={gifs[i].images.original.url} />);
    }
    return (
      <table><tbody>{rows}</tbody></table>
    );
  }
}

export default GifContainer;
