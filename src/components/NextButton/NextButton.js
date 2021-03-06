import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { ArrowForward } from '@material-ui/icons';

class NextButton extends Component {

  handleClick = () => {
    this.props.dispatch({ type: 'SET_ANSWER', payload: this.props.payload});
    this.props.history.push(this.props.page);
  }

  render() {
    return (
      <Button color="primary" variant="contained" onClick={this.handleClick}>Next <ArrowForward /></Button>
    );
  }
}

export default withRouter(connect()(NextButton));
