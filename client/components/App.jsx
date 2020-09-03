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

  render() {
    return (
      <>
        <button onClick={() => getImages("laptop")}>testAPI</button>

        {/* Empty Component */}
        <Search />
        <Gallery />
      </>
    )
  }
}

export default App
