import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import FormCard from '../FormCard/FormCard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route exact path='/'render={() => <FormCard page='1' title='How are you feeling today' category='feeling' nextPage='/2' />} />
          <Route exact path='/2' render={() => <FormCard page='2' title='How well ar you understanding the content?' category='understanding' nextPage='/3' />} />
          <Route exact path='/3' render={() => <FormCard page='3' title='How well are you being supported?' category='support' nextPage='/4' />} />
          <Route exact path='/4' component={Comments} />
          <Route exact path='/5' component={ThankYou} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
