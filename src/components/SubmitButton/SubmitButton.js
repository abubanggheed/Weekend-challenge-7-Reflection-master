import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class SubmitButton extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'SET_ANSWER', payload: this.props.payload});
    this.props.history.push('/5');
  }

  render() {
    return (
      <Button variant="raised" color="secondary" onClick={this.handleClick}>Submit</Button>
    );
  }
}

export default withRouter(connect()(SubmitButton));
