import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SubmitButton extends Component {

  handleClick = () => {
    this.props.dispatch(this.props.action);
    this.props.history.push('/5');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Submit</button>
    );
  }
}

export default withRouter(connect()(SubmitButton));
