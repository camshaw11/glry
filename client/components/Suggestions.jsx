import React from 'react'

let suggestionsList = ["Food", "Laptop", "Land", "Dogs", "Hipster", "Play", "Memes", "Animals", "Mountain"]

class Suggestions extends React.Component {
  
  getRandomSuggestions = () => {
    const suggestionsArr = []
    let suggestionsListTemp = suggestionsList
    for (let i = 0; i<3; i++) {
      const random = Math.floor(Math.random() * suggestionsListTemp.length)
      if (!suggestionsArr.includes(suggestionsListTemp[random])) {
        suggestionsArr.push(suggestionsListTemp[random])
      } else {
        i--
      }
    }
    suggestionsListTemp = suggestionsList
    return suggestionsArr
  }

  handleClick = (query, event) => {
    event.preventDefault()
    this.props.handleSubmit(query)
    this.props.history.push(`/search/${query}`)
  }
  
  render() {
    const randomSuggestions = this.getRandomSuggestions() 
    return (
      <>  
      <div>
        <p id="how-about">How about ...</p>
        {randomSuggestions.map((suggestion, index) => {
          return <button key={index} onClick={(event) => this.handleClick(suggestion, event)} >{suggestion}</button>
        })}

      </div>
      </>
    )
  }
}

export default Suggestions