import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {getSubjects} from '../actions/subjects'
import { connect } from 'react-redux'


class NavBar extends Component {

  componentDidMount() {
    this.props.getSubjects()
  }

  render() {
    
    this.props.subjects.map(subject => console.log(subject.id, subject.name))
    let currentSubjectLink;
    const subjectsList = this.props.subjects.map(subject => 
        <NavLink className="nav-button" 
              to={`/subjects/${subject.id}`} key={subject.id}> {subject.name}
        </NavLink> 
      )

    // const subjectsList = [<NavLink className="nav-links" to="/subjects/1" key="1">Vocabulary</NavLink>,
    // <NavLink className="nav-links" to="/subjects/2" key="2">Biology</NavLink>,
    // <NavLink className="nav-links" to="/subjects/3" key="3">French</NavLink>]

    return (
      
      <div className="navbar">
        <ul> 
        <NavLink className="nav-button" to="/">Home</NavLink>
        {this.props.loading ? <h3> Loading... </h3> : subjectsList}
        </ul> 
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

export default connect(mapStateToProps, {getSubjects}) (NavBar)


// export default NavBar