import React, { Component } from 'react';
import ItemDrawing from '../GIS/TOC/ItemDrawing';

class Drawing extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div style={{height:"100%"}}>
        <ItemDrawing/>
      </div>
     );
  }
}
 
export default Drawing;