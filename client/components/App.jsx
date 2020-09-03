import React from 'react'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

import { getImages, getRandomImage } from "../apis/splashbase.js"

class App extends React.Component {
  state = {
    query: "",
    images: [],
    randomImage: {}
  }
  handleSubmit = (query) => {
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
      <>
        <header>
          <h1>GLRY</h1>
          <h1>Heart</h1>
        </header>
        <main>
          <Search handleSubmit={this.handleSubmit} />
        </main>
        <button onClick={() => getImages("laptop")}>test search api</button>
        <button onClick={() => getRandomImage()}>test random image</button>
        {/* Empty Component */}
        <Gallery images={this.state.images} query={this.state.query} />
      </>
    )
  }
}

export default App
