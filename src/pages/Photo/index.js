// import React, { Component } from 'react';

// class Photo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//       <h1>Photo</h1>
//      );
//   }
// }
 
// export default Photo;
import PhotoCardList from './components/photoCardList';

export default function() {
  return (
    <div style={{padding: "24px"}}>
     <PhotoCardList></PhotoCardList>
    </div>
  );
}