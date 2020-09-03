import React from 'react'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

class App extends React.Component {
  render() {
    return (
      <>
        <h1>React development has begun!</h1>
        <Search />
        <Gallery />
      </>
    )
  }
}

export default App
