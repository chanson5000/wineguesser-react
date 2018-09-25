import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import RedForm from './components/guess/RedForm';
import WhiteForm from './components/guess/WhiteForm';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/guess-red" component={RedForm}/>
            <Route exact path="/guess-white" component={WhiteForm}/>
            <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
