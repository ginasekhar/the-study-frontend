import React, { Component } from 'react'
import TopicInput from '../components/topics/TopicInput'
import Topics from '../components/topics/Topics'
import { connect } from 'react-redux'


class TopicsContainer extends Component {
  render() {
    const subjectId = this.props.match.params.id
    const topicsList = this.props.topics.filter(topic => topic.subject_id == subjectId )
  
    return (
      <div>
        <h3> In Topics container </h3>
        <TopicInput subjectId={subjectId}/>
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

export default connect (mapStateToProps) (TopicsContainer)
// const mapDispatchToProps = dispatch => ({
//   addTopic: topic => dispatch({ type: "ADD_TOPIC", topic }),
//   deleteTopic: id => dispatch({ type: "DELETE_TOPIC", id })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer)
{/* <Topics deleteTopic={this.props.deleteTopic} topics={this.props.topics}/> */}