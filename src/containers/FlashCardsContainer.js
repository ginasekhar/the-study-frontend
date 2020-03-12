import React, { Component } from 'react'
// import FlashCardInput from '../components/flashCards/FlashCardInput'
import FlashCards from '../components/flashCards/FlashCards'
import { connect } from 'react-redux'

class FlashCardsContainer extends Component {

  render() {
    const topicId = this.props.location.state.topic.topic.id
    
    // / const topicId = this.props.match.params.id
    const topicName = this.props.location.state.topic.topic.name
    
    const flashCardsList = this.props.flashCards.filter(flashCard => flashCard.sub_topic.id == topicId )
    
    console.log("props are: ", this.props)
    
  
    return (
      <div>
        <h3> Flash Cards for {topicName} </h3>
        <FlashCards flashCards={flashCardsList}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => { 
  return {
    flashCards: state.flashCards.flashCards,
    loadingflashCards: state.flashCards.loading
  }
}

export default connect (mapStateToProps) (FlashCardsContainer)