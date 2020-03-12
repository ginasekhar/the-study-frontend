import React, { Component } from 'react';

import Home from './containers/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import logo from './logo.png';
import TopicsContainer from './containers/TopicsContainer'
import FlashCardsContainer from './containers/FlashCardsContainer'
import FlashCardInput from './components/flashCards/FlashCardInput'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>&nbsp;&nbsp;&nbsp;</h2>
          <img src={logo} className="App-logo" alt="logo"/>
          <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE STUDY </h2>
        </div>
        <Router>
          <div className="App-routes">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/subjects/:id/sub_topics" component={TopicsContainer} />
              <Route exact path="/sub_topics/:id/flash_cards" component={FlashCardsContainer} />
              <Route exact path="/sub_topics/:id/flash_cards/new" component={FlashCardInput} /> 
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
  
}


export default App;
