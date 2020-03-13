import React, { Component } from 'react';
import { deleteFlashCard } from '../../actions/flashcards'
import { connect } from 'react-redux'

class FlashCard extends Component {
  
  handleOnClick = () => { 
    this.props.deleteFlashCard(this.props.flashcard.id)
  } 

  render() {

    const { flashcard } = this.props;
    
    return (
      <div className="flash-card">
        <li key={flashcard.id}>
        <strong>{flashcard.question}</strong><br/>{flashcard.answer}  
        <button fc-id={flashcard.id} className="delete" onClick={this.handleOnClick}> Delete Card </button>
        </li>
      </div>
    );
  }

};

export default connect (null, {deleteFlashCard}) (FlashCard);

