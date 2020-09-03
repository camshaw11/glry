import React from 'react'
import Masonry from 'react-masonry-component';
import Image from "./Image.jsx"


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


class Gallery extends React.Component {
  // constructor(props) {
  //   this.state({
  //     images: []
  //   })
  //   // console.log(props)
  // }

  // componentDidMount() {
  //   this.loadData();  
  // }

  // loadData() {
  //   this.setState({
  //     images: this.props.images
  //   })
  //   console.log(images)
  // }

  render() {
    // const childElements = this.props.images.images
    console.log(this.props.images.images)
    
    const imageSearch = this.props.images.images.map((element, i) => {
      return (
        <li className="image-element-class">
            <img src={element.url} />
            <Image />
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
