import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class NewFeedbackButton extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'RESET'});
    this.props.history.push('/');
  }

  render() {
    return (
      <Button variant="outlined" onClick={this.handleClick}>Leave New Feedback</Button>
    );
  }
}

export default withRouter(connect()(NewFeedbackButton));
