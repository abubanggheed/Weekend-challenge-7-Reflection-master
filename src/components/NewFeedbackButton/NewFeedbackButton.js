import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NewFeedbackButton extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'RESET'});
    this.props.history.push('/');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Leave New Feedback</button>
    );
  }
}

export default withRouter(connect()(NewFeedbackButton));
