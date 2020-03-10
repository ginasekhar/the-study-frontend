import React, { Component } from 'react'
import TopicInput from '../components/topics/TopicInput'
import Topics from '../components/topics/Topics'
import { connect } from 'react-redux'

class TopicsContainer extends Component {
  render() {
  const topicsList = this.props.topics.filter(topic => topic.subject_id == this.props.match.params.id)
  
    return (
      <div>
        
        {/* <TopicInput addTopic={this.props.addTopic} subjectId={this.props.subjectId}/>
        <Topics deleteTopic={this.props.deleteTopic} topics={this.props.topics}/> */}
        <h3> In Topics container </h3>
        <Topics topics={topicsList}/>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => { 
  return {
    topics: state.topics.topics,
    loadingtopics: state.topics.loading
  }
}

// const mapDispatchToProps = dispatch => ({
//   addTopic: text => dispatch({ type: "ADD_TOPIC", text }),
//   deleteTopic: id => dispatch({ type: "DELETE_TOPIC", id })
// })

export default connect(mapStateToProps, {})(TopicsContainer)

// export default TopicsContainer
