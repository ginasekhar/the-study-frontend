import React, { Component } from 'react'
// import TopicInput from '../components/topics/TopicInput'
// import Topics from '../components/topics/Topics'
// import { connect } from 'react-redux'

class TopicsContainer extends Component {

  render() {
    return (
      <div>
        <h3> I am in topics container</h3>
        {/* <TopicInput addTopic={this.props.addTopic} subjectId={this.props.subjectId}/>
        <Topics deleteTopic={this.props.deleteTopic} topics={this.props.topics}/> */}
      </div>
    )
  }
}

// const mapStateToProps = ({ topics }) => ({ topics })

// const mapDispatchToProps = dispatch => ({
//   addTopic: text => dispatch({ type: "ADD_TOPIC", text }),
//   deleteTopic: id => dispatch({ type: "DELETE_TOPIC", id })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer)

export default TopicsContainer
