import React from 'react'
import Masonry from 'react-masonry-component';
import Image from "./Image.jsx"


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


class Gallery extends React.Component {

  render() {
    const imageSearch = this.props.images.images.map((element, i) => {
      return (
        <li key={i} className="image-element-class">
            <Image source={element.url} altTag={this.props.query}/>
        </li>
      );
    })
    return (
      <>
        <h1>Search results for {this.props.query}</h1>
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'} 
          options={masonryOptions} 
          disableImagesLoaded={false} 
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
        >
          {imageSearch}
        </Masonry>
      </>
    )
  }
}

export default Gallery
