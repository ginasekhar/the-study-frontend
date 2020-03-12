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
      <div>
        <li>
        <strong>{flashcard.question}</strong><br/>{flashcard.answer}
        </li>
        <button fc-id={flashcard.id} className="delete" onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default connect (null, {deleteFlashCard}) (FlashCard);

