import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NextButton extends Component {

  handleClick = () => {
    this.props.dispatch(this.props.action);
    this.props.history.push(this.props.page);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Next</button>
    );
  }
}

export default withRouter(connect()(NextButton));
