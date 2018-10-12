import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route exact path='/' component={Feeling} />
          <Route exact path='/2' component={Understanding} />
          <Route exact path='/3' component={Support} />
          <Route exact path='/4' component={Comments} />
          <Route exact path='/5' component={ThankYou} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
