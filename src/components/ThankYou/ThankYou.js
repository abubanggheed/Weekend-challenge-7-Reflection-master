import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NewFeedbackButton from '../NewFeedbackButton/NewFeedbackButton';

class ThankYou extends Component {
  componentDidMount() {
    // send redux state to server on load
    // this component is the only one that needs to access the redux store
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.feedback /* redux state -- see export */
    }).then(response => {

    }).catch(error => {
      console.log('ERROR:', error);
      alert('server down! try again later');
    });
  }

  render() {
    return (
      <div>
        <h2>Thank You!</h2>
        <NewFeedbackButton />
        <pre>
          <img src="images/goat_small.jpg" alt="" />
        </pre>
      </div>
    );
  }
}

export default connect(state => ({feedback: state}))(ThankYou);
