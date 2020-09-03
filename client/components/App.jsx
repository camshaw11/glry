import React from 'react'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

import { getImages, getRandomImage } from '../apis/splashbase'

class App extends React.Component {
  state = {
    query: "",
    images: [],
    randomImage: {}
  }
  handleSubmit = (query) => {
    getImages(query)
      .then(images => {
        this.setState({
          images: images
        })
      })
  } 
  render() {
    return (
      <>
        {/* HTML template */}
        <h1>React development has begun!</h1>
        <header>
          <h1>GLRY</h1>
          <h1>Heart</h1>
        </header>
        <main>
          <Search handleSubmit={this.handleSubmit} />
        </main>

        {/* Empty Component */}
        <Gallery images={this.state.images} query={this.state.query} />
      </>
    )
  }
}

export default App
