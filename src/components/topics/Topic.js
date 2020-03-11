import React, { Component } from 'react';

import { addFlashCard, getFlashCards} from '../../actions/flashcards'
import { deleteTopic} from '../../actions/topics'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './Topic.css' 


class Topic extends Component {

  handleOnClickDelete = (event) => { 
    console.log("just before call to deleteTopic in Topic.js", this.props)
    this.props.deleteTopic(this.props.topic.id)
  } 

  handleOnClickAddFC = (event) => { 
    console.log("just before call to addFC in Topic.js", this.props)
    this.props.addFlashCard(this.props.topic.id)
  } 

  handleOnClickViewFC = (event) => { 
    console.log("just before call to getFC in Topic.js", this.props)
    this.props.getFlashCards(this.props.topic.id)
  } 

  render() {
    const { topic } = this.props;

    return (
      <div className="card">
        <li>
          <strong>{topic.name}</strong><br/><br/>{topic.description}<br/>

          <button topic-id={topic.id} className="delete" onClick={this.handleOnClickDelete}> X </button>

          <Link className="view-fc-link" 
          to={`/sub_topics/${topic.id}/flash_cards`} 
          key={topic.id}> 
            <button type="button" 
              topic-id={topic.id} onClick={this.handleOnClickViewFC}>
              View FlashCards
            </button>
        </Link>  
        <Link className="add-flash-card" 
          to={`/sub_topics/${topic.id}/flash_cards/new`} 
          key={topic.id}> 
            <button type="button" 
              topic-id={topic.id} onClick={this.handleOnClickAddFC}>
              Add a FlashCard
            </button>
        </Link>  
        </li>
      </div>
    );
  }
};

export default connect (null, {deleteTopic, getFlashCards, addFlashCard}) (Topic);

