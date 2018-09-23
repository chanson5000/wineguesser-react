import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import GuessRedWine from './components/guess/RedWine';
import GuessWhiteWine from './components/guess/WhiteWine';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/guess-red" component={GuessRedWine}/>
            <Route exact path="/guess-white" component={GuessWhiteWine}/>
            <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
