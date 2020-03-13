import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {getSubjects, setCurrentSubject} from '../actions/subjects'

import {getTopics} from '../actions/topics'
import {getFlashCards} from '../actions/flashcards'
import { connect } from 'react-redux'
//  

class NavBar extends Component {

  componentDidMount() {
    this.props.getSubjects()
    this.props.getTopics()
    this.props.getFlashCards()
  }

  handleOnClick = (event) => { 
    
    let selectedSubject;
    
    if (event.target.name === "application-home")
      selectedSubject = { selected: false, subjectId: null, subjectName: ''}
    else
      selectedSubject = { selected: true, subjectId: event.target.id, subjectName: event.target.name}
      
    this.props.setCurrentSubject(selectedSubject);
  } 


  render() {
    
    const subjectsList = this.props.subjects.map(subject => 
        <Link className="nav-button" 
            to={`/subjects/${subject.id}/sub_topics`}
          key={subject.id}> 
            <button type="button" 
              id={subject.id} 
              name={subject.name}
              onClick={this.handleOnClick}>
              {subject.name}
            </button>
        </Link>
      )
    return (
      <div>
        <div className="nav-container">
          <ul> 
          <Link className="nav-button" to="/"> 
            <button type="button" name="application-home onClick={this.handleOnClick}>">Home</button>
          </Link>
          {this.props.loadingSubjects ? <h3> Loading... </h3> : subjectsList}
          </ul> 
        </div>
        
      </div>
        
    )
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects.subjects,
    currentSubject: state.subjects.currentSubject,
    loadingSubjects: state.subjects.loading,
    topics: state.topics.topics,
    currentTopic: state.topics.currentTopic,
    loadingTopics: state.topics.loading
  }
}

export default connect(mapStateToProps, {getSubjects, getTopics, getFlashCards, setCurrentSubject}) (NavBar)
