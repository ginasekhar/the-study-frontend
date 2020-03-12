import React, { Component } from 'react'
import TopicInput from '../components/topics/TopicInput'
import Topics from '../components/topics/Topics'
import { connect } from 'react-redux'



class TopicsContainer extends Component {
  render() {
    
    const subjectId = this.props.location.state.subject.subject.id
    const subjectName = this.props.location.state.subject.subject.name
    
    let topicsList = this.props.topics.filter(topic => topic.subject_id == subjectId )
    
  
    return (
      <div className="topics-container">
        <h3> Topics in {subjectName} </h3>
        <TopicInput subjectId={subjectId}/>
        <Topics topics={topicsList}/>
      </div>
    )
  }  
}

const mapStateToProps = (state) => { 
  return {
    topics: state.topics.topics,
    loadingtopics: state.topics.loading
  }
}

export default connect (mapStateToProps) (TopicsContainer)
