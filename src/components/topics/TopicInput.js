import React, { Component } from 'react';

class TopicInput extends Component {
  state = {
    name: '',
    description: '',
    id: ''
  }

  handleOnChange(event) {
    const {name, value} = event.target
    this.setState({
      [name] : value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addTopic(this.state);
    this.setState({
      name: '',
      description: '',
      id: ''
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

export default TopicInput;