import React, { Component } from 'react';
import Topic from './Topic'


class Topics extends Component {
  render() {

    const topicsList =  this.props.topics.map(topic =>  <Topic 
      key={topic.id} 
      topic={topic} />)
      let displayMsg;
      if (this.props.subjectName)
        displayMsg = (topicsList.length > 0 ? "Topics in " + this.props.subjectName: "No Topics found for " + this.props.subjectName)
      else 
        displayMsg = "Please select a subject"
       

    return(
      <div className="topics-list">
        <h4>{displayMsg}</h4>
        <ul className = "topics-ul">
          {topicsList}
        </ul>
      </div>
      
    );
  }
};

export default Topics;