import React, { Component } from 'react'
import TopicsContainer from './TopicsContainer'
import FlashCardsContainer from './TopicsContainer'
import { connect } from 'react-redux'

class MainContainer extends Component {
  
  
  render() {
    return (
      <div className="main-container">
        <TopicsContainer />
        <FlashCardsContainer />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    subjects: state.subjects.subjects,
    currentSubject: state.subjects.currentSubject,
    loading: state.subjects.loading,
    topics: state.topics.topics,
    currentTopic: state.subjects.currentTopic,
    loadingtopics: state.topics.loading
  }
}

export default connect (mapStateToProps) (MainContainer)