import React, { Component } from 'react';
import {addFlashCard} from '../../actions/flashcards'
import {connect} from 'react-redux';

class FlashCardInput extends Component {

  state = {
    question: '',
    answer: '',
    id: '',
    sub_topic_id: this.props.match.params.id
  }

  handleOnChange(event) {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("going to call addFlashCard with param", this.state)
    const flashcard = {...this.state, sub_topic_id: this.props.match.params.id}
    this.props.addFlashCard(flashcard);

    this.setState({
      question: '',
    answer: '',
    id: '',
    sub_topic_id: ''
    });
  }
  render() {

    
    return (
      <div className="flash-card-add-form">
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
        <h4>Add a New Flash Card </h4> <br/>
            Card Front:
          <input
            type="text"
            name="question"
            value={this.state.question}
            onChange={(event) => this.handleOnChange(event)} />
          </label>
          <label>
            Card Back:
          <input
            type="text"
            name="answer"
            value={this.state.answer}
            onChange={(event) => this.handleOnChange(event)} />
          </label>
          <input type="submit" value="Add FlashCard" />
        </form>
      </div>
    );
  }
};

export default connect (null, {addFlashCard}) (FlashCardInput);
