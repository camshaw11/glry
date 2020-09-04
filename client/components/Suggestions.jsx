import React from 'react'

let suggestionsList = ["Food", "Laptop", "Dogs", "Cats", "Hipster", "Work", "Play", "Memes", "Animals"]

class Suggestions extends React.Component {

  getRandomSuggestions = () => {
    const suggestionsArr = []
    let suggestionsListTemp = suggestionsList
    for (let i = 0; i < 3; i++) {
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

  render() {
    const randomSuggestions = this.getRandomSuggestions()
    return (
      <>
        <div className="Suggestions-container">
          <div className="Suggestions-options">
            <p id="how-about">How about ...</p>
            {randomSuggestions.map((suggestion, index) => {
              return <button className="button is-danger" key={index} onClick={() => this.props.handleSubmit(suggestion)} >{suggestion}</button>
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Suggestions