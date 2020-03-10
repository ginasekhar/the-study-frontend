import React, { Component } from 'react';
// import FlashCardsContainer from '../../containers/FlashCardsContainer'

class Topic extends Component {

  handleOnClick = () => { 
    this.props.deleteTopic(this.props.topic.id)
  } 

  render() {
    const { topic } = this.props;

    return (
      <div>
        <li>
          {topic.name} {topic.description}
          <button onClick={this.handleOnClick}> X </button>
          
        </li>
      </div>
    );
  }
};

export default Topic;

{/* <FlashCardsContainer topic={topic}/> */}