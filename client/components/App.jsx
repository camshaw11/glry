import React from 'react'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

import { getImages, getRandomImage } from "../apis/splashbase.js"

class App extends React.Component {
  state = {
    query: "",
    images: {images: []},
    randomImage: {}
  }
  handleSubmit = (query) => {
    console.log("submit query:", query)
    getImages(query)
      .then(images => {
        console.log(images)
        this.setState({
          query: query,
          images: images
        })
      })
  }
  render() {
    return (
      <div className="App-container">
        <header>
          <h1>GLRY</h1>
          <h1>Heart</h1>
        </header>

        <div className="App-content">
          <main>
            <div className="App-content-search">
              <Search handleSubmit={this.handleSubmit} />
            </div>
            <div className="App-content-gallery">
              <Gallery images={this.state.images} query={this.state.query} />
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App
