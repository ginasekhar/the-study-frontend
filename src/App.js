import React from 'react';

import Home from './containers/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
// import Subjects from './components/Subjects';
// import SubTopics from './components/SubTopics';
// import FlashCards from './components/FlashCards';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2> THE STUDY </h2>
      </div>
      <Router>
        <div className="App-routes">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route exact path="/subjects" component={Subjects} />
             <Route exact path="/sub_topics" component={SubTopics} />
            <Route exact path="/flash_cards" component={FlashCards} /> */}
          </Switch>
        </div>
      </Router>
    </div>
   
  )
}

export default App;
