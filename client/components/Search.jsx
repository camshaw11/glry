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
    this.props.history.push(`/search?query=${this.state.query}`)
  }
  
  render() {
    return (
      <>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="search" id="search" onChange={this.handleChange} placeholder="search..." />
          </form>
        <Suggestions {...this.props} handleSubmit={this.props.handleSubmit} />
      </>
    )
  }
}

export default Search
