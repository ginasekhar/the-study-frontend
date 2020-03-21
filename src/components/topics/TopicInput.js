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
    
    this.props.addTopic(topic);
    
    this.setState({...this.state,
      name: '',
      description: ''
      // don't reset subject id

    });
  }
  render() {
    return (
      <div className="topic-input-container">
        <strong>Add a New Topic </strong> 
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div className="form-group form-control-sm">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text input-group-sm">Topic Name</span>
              </div>
              <input className="form-control" placeholder="Topic Name"
                type="text" name="name" value={this.state.name}
                onChange={(event) => this.handleOnChange(event)} 
              />
            </div>
            <div className="form-group form-control-sm">
              <div className="input-group input-group-sm">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-sm">Description</span>
                </div>
                <input className="form-control" placeholder="Topic Description"
                  type="text" name="description" value={this.state.description}
                  onChange={(event) => this.handleOnChange(event)} 
                />
              </div>
            </div>
            <input type="submit" className="submit-button btn-sm" value="Add Topic" /> 
          </div>
        </form>
      </div>
    );
  }
};

export default connect (null, {addTopic}) (TopicInput);

{/* <button type="submit" class="btn btn-sm">Add Topic</button> */}
