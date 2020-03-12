import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTopic } from '../../actions/topics'

class TopicInput extends Component {
  state = {
    name: '',
    description: '',
    subject_id: this.props.subjectId
  }

  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    const topic = {...this.state, subject_id: this.props.subjectId}
    
    console.log ("going to add topic", topic)
    this.props.addTopic(topic);
    
    this.setState({
      name: '',
      description: '',
      subject_id: ''
    });
  }
  render() {
    return (
      <div className="topic-input-form">
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
             <h4>Add a New Topic </h4> <br/>
            Enter Topic Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          </label> <br/>
          <label>
            Enter Topic Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          </label> <br/>
          <input type="submit" className="submit-button" value="Add Topic" />
        </form>
      </div>
    );
  }
};


export default connect (null, {addTopic}) (TopicInput);