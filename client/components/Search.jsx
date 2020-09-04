import React from 'react'

import Suggestions from "./Suggestions.jsx"

class Search extends React.Component {
  state = {
    query: ''
  }
  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.query)
  }
  
  render() {
    return (
      <>
        <div className="search-box">
          <form onSubmit={this.handleSubmit}>
            <input className="input is-danger" type="text" name="search" id="search" onChange={this.handleChange} placeholder="search..." />
          </form>
        <Suggestions handleSubmit={this.props.handleSubmit} />
        </div>
      </>
    )
  }
}

export default Search
