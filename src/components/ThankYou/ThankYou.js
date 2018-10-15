import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NewFeedbackButton from '../NewFeedbackButton/NewFeedbackButton';

class ThankYou extends Component {
  componentDidMount() {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.feedback
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
