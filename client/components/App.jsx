import React from 'react'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

class App extends React.Component {
  state = {
    query: "",
    images: [],
    randomImage: {}
  }
  
  render() {
    return (
      <>
        {/* HTML template */}
        {/* <h1>React development has begun!</h1>
        <header>
          <h1>GLRY</h1>
          <h1>Heart</h1>
        </header>
        <main>
          <div className="search-box">
            <input type="text" name="search" id="search" placeholder="search..." />
          </div>
        </main> */}

        {/* Empty Component */}
        <Search />
        <div className="gallery-container">
          <Gallery />
        </div>
      </>
    )
  }
}

export default App
