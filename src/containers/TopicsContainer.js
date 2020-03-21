import React, { Component } from 'react'
import TopicInput from '../components/topics/TopicInput'
import Topics from '../components/topics/Topics'
import { connect } from 'react-redux'



class TopicsContainer extends Component {

  state = {
    sortOrder: "none",
    searchTerm: ""
  }

  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }
  
  sortAndFilterTopics = (list) => {

    let filteredList = list;

    if (this.state.searchTerm.trim() !== "") {
      const ucaseSearchTerm = this.state.searchTerm.toUpperCase()
      
      filteredList = list.filter(topic => {
        return (topic.description.toUpperCase().includes(ucaseSearchTerm) ||
                topic.name.toUpperCase().includes(ucaseSearchTerm))
      })
      
      // console.log("filtered list", filteredList)

    } 
    
    switch(this.state.sortOrder) {
      case "none" :
        break;
      case "name-a" : 
      filteredList.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
        break;
      case "name-d" : 
      filteredList.sort((a, b) => (b.name.toUpperCase() > a.name.toUpperCase()) ? 1 : -1)
        break;
      case "dscr-a" : 
      filteredList.sort((a, b) => (a.description.toUpperCase() > b.description.toUpperCase()) ? 1 : -1)
        break; 
      case "dscr-d" : 
      filteredList.sort((a, b) => (b.description.toUpperCase() > a.description.toUpperCase()) ? 1 : -1)      
      default :
        break;
    } 
      
    return filteredList;

  }


  render() {
    let topicsList = [];

    
    if (this.props.currentSubject.selected )
       topicsList = this.props.topics.filter(topic => topic.subject_id == this.props.currentSubject.subjectId )
    
    return (
      <div className="topics-container">
        <TopicInput subjectId={this.props.currentSubject.subjectId}/>

        <div className='sort-selection'>
          <label>
            Choose a sort order:
          <select value={this.state.sortOrder} name="sortOrder" id="sort-order" onChange={this.handleOnChange}>
            <option value="none">None</option>
            <option value="name-a">Topic Name Ascending</option>
            <option value="name-d">Topic Name Descending</option>
            <option value="dscr-a">Topic Description Ascending</option>
            <option value="dscr-d">Topic Description Descending</option>
          </select>
          </label>
        </div>  
        <div>
          <label>
            Filter results by keyword:
            <input name="searchTerm" type="text" className="search-term" placeholder="Keyword" onChange={this.handleOnChange}/>
          </label>
        </div>

        
        <Topics subjectName={this.props.currentSubject.subjectName} topics={this.sortAndFilterTopics(topicsList)}/>
        
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
