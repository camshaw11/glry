import React from 'react'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

import { getImages, getRandomImage } from "../apis/splashbase.js"

class App extends React.Component {
  state = {
    query: "laptop",
    images: { images: [] },
    randomImage: {}
  }
  handleSubmit = (query) => {
    console.log("submit query:", query)
    getImages(query)
      .then(images => {
        console.log(images)
        this.setState({
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
        <main>
          <Search handleSubmit={this.handleSubmit} />
          <Gallery images={this.state.images} query={this.state.query} />
        </main>
      </div>
    )
  }
}

export default App
