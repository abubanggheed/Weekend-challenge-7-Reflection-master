import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import FormCard from '../FormCard/FormCard';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />
            <br />
            <Route exact path='/' render={() => <FormCard page='1' title='How are you feeling today' category='feeling' nextPage='/2' />} />
            <Route exact path='/2' render={() => <FormCard page='2' title='How well ar you understanding the content?' category='understanding' nextPage='/3' />} />
            <Route exact path='/3' render={() => <FormCard page='3' title='How well are you being supported?' category='support' nextPage='/4' />} />
            <Route exact path='/4' component={Comments} />
            <Route exact path='/5' component={ThankYou} />
            <Route exact path='/admin' component={Admin} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
