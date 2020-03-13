import React, { Component } from 'react';
import { deleteFlashCard } from '../../actions/flashcards'
import { connect } from 'react-redux'
import { Accordion, Card, Button } from 'react-bootstrap'


class FlashCard extends Component {
  state = {
    expanded: false
  }
  
  
  handleOnClick = () => { 
    this.props.deleteFlashCard(this.props.flashcard.id)
  } 

  toggleExpanded = () => {
    this.setState({expanded:!this.state.expanded})
  }

  render() {

    const { flashcard } = this.props;
    
    return (
      <div className="flash-card">
        <li key={flashcard.id}>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {flashcard.question}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{flashcard.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <button fc-id={flashcard.id} className="delete" onClick={this.handleOnClick}> Delete Card </button>
        </li>
      </div>
      
    );
  }

};

export default connect (null, {deleteFlashCard}) (FlashCard);

