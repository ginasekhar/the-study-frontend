import React, { Component } from 'react';
import { deleteTopic, setCurrentTopic} from '../../actions/topics'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Topic extends Component {

  handleOnClickDelete = (event) => { 
    this.props.deleteTopic(this.props.topic.id)
  } 

  handleOnClickFC = (event) => { 
    const selectedTopic = { selected: true, topicId: event.target.id, topicName: event.target.name}
    this.props.setCurrentTopic(selectedTopic);
  } 

  render() {
    const { topic } = this.props;

    return (
      <div className="topic-card">
        <li id={topic.id} key={topic.id}>
          <strong>{topic.name}</strong> <br/>{topic.description}<br/>
          
          <Link className="view-fc-link" 
            to={`/sub_topics/${topic.id}/flash_cards`}
            key={topic.id}> 
              <button type="button" 
                id={topic.id} name={topic.name} onClick={this.handleOnClickFC}>
                 FlashCards
              </button>
          </Link>  
          <button topic-id={topic.id} className="delete" onClick={this.handleOnClickDelete}> Delete Topic </button>
        </li>
      </div>
    );
  }
};

export default connect (null, {deleteTopic, setCurrentTopic}) (Topic);
