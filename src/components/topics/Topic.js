import React, { Component } from 'react';
import { deleteTopic } from '../../actions/topics'
import { connect } from 'react-redux'
import './Topic.css' 


class Topic extends Component {

  handleOnClickDelete = (event) => { 
    console.log("just before call to deleteTopic in Topic.js", this.props)
    this.props.deleteTopic(this.props.topic.id)
  } 

  // handleOnClickAddFC = (event) => { 
  //   console.log("just before call to addFC in Topic.js", this.props)
  //   this.props.addFlashCard(this.props.topic.id)
  // } 

  // handleOnClickViewFC = (event) => { 
  //   console.log("just before call to addFC in Topic.js", this.props)
  //   this.props.viewFlashCards(this.props.topic.id)
  // } 

  render() {
    const { topic } = this.props;

    return (
      <div className="card">
        <li>
          <strong>{topic.name}</strong><br/><br/>{topic.description}
          <button id={topic.id} className="delete" onClick={this.handleOnClickDelete}> X </button>
          {/* <button id={topic.id} href="" className="add-flash-card" onClick={this.handleOnClickAddFC}> AddFC </button>
          <button id={topic.id} href="" className="view-flash-cards" onClick={this.handleOnClickViewFC}> AddFC </button> */}
          
        </li>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteTopic: id => dispatch({ type: "DELETE_TOPIC", id })
  // ,addFlashCard: flashCard => dispatch({ type: "ADD_FLASHCARD", flashCard})
  // ,deleteTopic: topicId => dispatch({ type: "VIEW_FLASHCARDS", topicId })
})

export default connect (null, mapDispatchToProps) (Topic);
