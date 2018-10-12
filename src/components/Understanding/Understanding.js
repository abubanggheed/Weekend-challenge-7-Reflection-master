import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Understanding extends Component {

  state = {
    understanding: ''
  }

  handleChange = event => {
    this.setState({
      understanding: event.target.value
    });
  }

  render() {
    return (
      <div>
          <h2>2 of 4 pages</h2>
          <p>How well ar you understanding the content?</p>
          <pre><input type='number' value={this.state.understanding} onChange={this.handleChange} /></pre>
          <NextButton page='/3' action={{type: 'UNDERSTANDING', payload: this.state.understanding}} />
      </div>
    );
  }
}

export default Understanding;
