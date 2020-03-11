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
    
    const topic = {...this.state}
    console.log("in handleonsubmit before calling addTopic", topic)
    this.props.addTopic(topic);
    
    this.setState({
      name: '',
      description: '',
      subject_id: this.props.subjectId
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
            Enter Topic Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          </label>
          <label>
            Enter Topic Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          </label>
          <input type="submit" value="Add Topic" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addTopic: topic => dispatch({ type: "ADD_TOPIC", topic })
})


export default connect (null, mapDispatchToProps) (TopicInput);