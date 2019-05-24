import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class ItemPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const images = [
      {
        original: `assets/picture/original/1.jpg`,
        thumbnail: `assets/picture/thumbnail/1.jpg`,
      },
      {
        original: `assets/picture/original/2.jpg`,
        thumbnail: `assets/picture/thumbnail/2.jpg`,
      },
      {
        original: `assets/picture/original/3.jpg`,
        thumbnail: `assets/picture/thumbnail/3.jpg`,
      },
      {
        original: `assets/picture/original/4.jpg`,
        thumbnail: `assets/picture/thumbnail/4.jpg`,
      },
      {
        original: `assets/picture/original/5.jpg`,
        thumbnail: `assets/picture/thumbnail/5.jpg`,
      },
      {
        original: `assets/picture/original/6.jpg`,
        thumbnail: `assets/picture/thumbnail/6.jpg`,
      },
      {
        original: `assets/picture/original/7.jpg`,
        thumbnail: `assets/picture/thumbnail/7.jpg`,
      },
      {
        original: `assets/picture/original/8.jpg`,
        thumbnail: `assets/picture/thumbnail/8.jpg`,
      },
      {
        original: `assets/picture/original/9.jpg`,
        thumbnail: `assets/picture/thumbnail/9.jpg`,
      },
      {
        original: `assets/picture/original/10.jpg`,
        thumbnail: `assets/picture/thumbnail/10.jpg`,
      },
      {
        original: `assets/picture/original/11.jpg`,
        thumbnail: `assets/picture/thumbnail/11.jpg`,
      },
      {
        original: `assets/picture/original/12.jpg`,
        thumbnail: `assets/picture/thumbnail/12.jpg`,
      },
    ]

    return ( 
      <ImageGallery items={images} />
     );
  }
}
 
export default ItemPicture;