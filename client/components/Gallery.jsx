import React from 'react'
import Masonry from 'react-masonry-component';
import Image from "./Image.jsx"


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


class Gallery extends React.Component {

  componentDidMount() {
      this.props.handleSubmit(this.props.match.params.term)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.term != this.props.match.params.term) {
      this.props.handleSubmit(this.props.match.params.term)
    }
  }

  render() {
    console.log('Q', this.props.location.search)
    // const childElements = this.props.images.images
    console.log(this.props.images.images)

    const imageSearch = this.props.images.images.map((element, i) => {
      return (
        <li key={i} className="image-element-class">
            <img src={element.url} />
            {/* <Image /> */}
        </li>
      );
    })
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
          {imageSearch}
        </Masonry>
      </>
    )
  }
}

export default Gallery
