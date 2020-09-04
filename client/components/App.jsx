import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Search from "./Search.jsx"
import Gallery from "./Gallery.jsx"

import { getImages, getRandomImage } from "../apis/splashbase.js"

class App extends React.Component {
  state = {
    query: "",
    images: { images: [] },
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
      <Router>
        <header>
          <div className="App-title-logo">
            <h1>GLRY</h1>
            <a href="#/"><img src="./logo.png"></img></a>
          </div>
        </header>


        <main>

          <div className="search-box">
            <Route exact path='/' component={(props) => <Search {...props} handleSubmit={this.handleSubmit} />} />
          </div>

          <Route path='/search/:term' render={(props) =>
            <Gallery {...props}
              images={this.state.images} query={this.state.query} handleSubmit={this.handleSubmit} />
          } />

        <Route path='/search/:term' render={(props) => 
          <>
          <Search {...props} handleSubmit={this.handleSubmit} />
          <Gallery {...props} 
                  images={this.state.images} query={this.state.query} handleSubmit={this.handleSubmit} />
          </>
                  } />
        </main>
      </Router>
    )
  }
}

export default App
