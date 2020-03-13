import React, { Component } from 'react'
import TopicInput from '../components/topics/TopicInput'
import Topics from '../components/topics/Topics'
import { connect } from 'react-redux'



class TopicsContainer extends Component {
  render() {
    let topicsList = [];

    if (this.props.currentSubject.selected )
       topicsList = this.props.topics.filter(topic => topic.subject_id == this.props.currentSubject.subjectId )
    
    return (
      <div className="topics-container">
        <TopicInput subjectId={this.props.currentSubject.subjectId}/>
        <Topics subjectName={this.props.currentSubject.subjectName} topics={topicsList}/>
      </div>
    )
  }  
}

const mapStateToProps = (state) => { 
  return {
    topics: state.topics.topics,
    currentSubject: state.subjects.currentSubject
  }
}

export default connect (mapStateToProps) (TopicsContainer)
