import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {getSubjects} from '../actions/subjects'
import {getTopics} from '../actions/topics'
import { connect } from 'react-redux'
import TopicsContainer from '../containers/TopicsContainer'

class NavBar extends Component {

  componentDidMount() {
    this.props.getSubjects()
    this.props.getTopics()
  }

  render() {
    
    this.props.subjects.map(subject => console.log(subject.id, subject.name))
    
    const subjectsList = this.props.subjects.map(subject => 
        <NavLink className="nav-button" 
          to={`/subjects/${subject.id}/sub_topics`} 
          key={subject.id}> 
            <button type="button" 
              id={subject.id}>
              {subject.name}
            </button>
        </NavLink>
      )
    return (
      <div>
        <div className="navbar">
          <ul> 
          <NavLink className="nav-button" to="/"> 
            <button type="button">Home</button>
          </NavLink>
          {this.props.loading ? <h3> Loading... </h3> : subjectsList}
          </ul> 
        </div>
        
      </div>
        
    )
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects.subjects,
    loading: state.subjects.loading,
    topics: state.topics.topics,
    loadingtopics: state.topics.loading
  }
}

export default connect(mapStateToProps, {getSubjects, getTopics}) (NavBar)
