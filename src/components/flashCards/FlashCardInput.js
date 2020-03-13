import React, { Component } from 'react';
import {addFlashCard} from '../../actions/flashcards'
import {connect} from 'react-redux';

class FlashCardInput extends Component {

  state = {
    question: '',
    answer: '',
    sub_topic_id: this.props.topicId
  }

  handleOnChange(event) {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    
    const flashcard = {...this.state, sub_topic_id: this.props.topicId}
  
    this.props.addFlashCard(flashcard);

    this.setState({...this.state,
      question: '',
      answer: ''
    });
  }
  render() {

    
    return (
      <div className="flash-card-input-container">
        <strong>Add a New Flash Card </strong> 
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <div class="form-group form-control-sm">
            <div class="input-group input-group-sm">
              <div class="input-group-prepend">
                <span class="input-group-text input-group-sm">Term</span>
              </div>
              <input
                type="text"
                name="question"
                value={this.state.question}
                onChange={(event) => this.handleOnChange(event)} 
              />
              </div>
                <div class="form-group form-control-sm">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text input-group-sm">Definition</span>
                    </div>
                    <input
                      type="text"
                      name="answer"
                      value={this.state.answer}
                      onChange={(event) => this.handleOnChange(event)} 
                    />
                    </div>
                  </div>
                  <input type="submit" className="submit-button btn-sm" 
                  value="Add FlashCard" />
                </div>
        </form>
      </div>
    );
  }
};

export default connect (null, {addFlashCard}) (FlashCardInput);
