import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class NextButton extends Component {

  handleClick = () => {
    this.props.dispatch(this.props.action);
    this.props.history.push(this.props.page);
  }

  render() {
    return (
      <Button color="primary" variant="contained" onClick={this.handleClick}>Next</Button>
    );
  }
}

export default withRouter(connect()(NextButton));
