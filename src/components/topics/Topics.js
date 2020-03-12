import React, { Component } from 'react';
import Topic from './Topic'


class Topics extends Component {
  render() {
    const topicsList =  this.props.topics.map(topic =>  <Topic 
      key={topic.id} 
      topic={topic} />)

    return(
      <ul className="topics-list">
        {topicsList}
      </ul>
    );
  }
};

export default Topics;