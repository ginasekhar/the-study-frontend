import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {getSubjects} from '../actions/subjects'
import {getTopicsForSubject} from '../actions/subtopics'
import { connect } from 'react-redux'

class NavBar extends Component {

  componentDidMount() {
    this.props.getSubjects()
  }

  handleOnClick = (event) => { 
    this.props.getTopicsForSubject(event.target.name)
    // console.log ("I was clicked", event.target)
  } 

  render() {
    
    this.props.subjects.map(subject => console.log(subject.id, subject.name))
    
    const subjectsList = this.props.subjects.map(subject => 
        <NavLink className="nav-button" 
        to={`/subjects/${subject.id}`} 
        key={subject.id}> 
        <button type="button" 
                  onClick={this.handleOnClick} 
                  name={subject.id}>
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
        <div className="subtopics-container">
          <SubTopicsContainer />
        </div>
      </div>
        
    )
  }
}

const mapStateToProps = state => {
  console.log ("I am state", state) 
  return {
    subjects: state.subjects.subjects,
    loading: state.subjects.loading
  }
}

export default connect(mapStateToProps, {getSubjects, getTopicsForSubject}) (NavBar)


// export default NavBar