import React from 'react'
import Masonry from 'react-masonry-component';
import Image from "./Image.jsx"


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


class Gallery extends React.Component {
  render() {
    // const childElements = this.props.elements.map(function(element){
    //   return (
    //     <li className="image-element-class">
    //         <img src={element.src} />
    //         <Image />
    //     </li>
    //   );
    // })
    return (
      <>
        <h1>Search results for...</h1>
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'} 
          options={masonryOptions} 
          disableImagesLoaded={false} 
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
        >
          {/* {childElements} */}
        </Masonry>
      </>
    )
  }
}

export default Gallery
