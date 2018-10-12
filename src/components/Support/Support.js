import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Support extends Component {

  state = {
    supported: ''
  }

  handleChange = event => {
    this.setState({
      supported: event.target.value
    });
  }

  render() {
    return (
      <div>
          <h2>3 of 4 pages</h2>
          <p>How well are you being supported?</p>
          <input type="number" value={this.state.supported} onChange={this.handleChange} />
          <NextButton page='4' action={{type: 'SUPPORTED', payload: this.state.supported}}/>
      </div>
    );
  }
}

export default Support;
