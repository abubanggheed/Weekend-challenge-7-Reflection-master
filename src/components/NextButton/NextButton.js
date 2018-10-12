import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NextButton extends Component {

    handleClick = () => {
        this.props.history.push(this.props.page);
    }

  render() {
    return (
      <button onClick={this.handleClick}>Next</button>
    );
  }
}

export default withRouter(NextButton);
