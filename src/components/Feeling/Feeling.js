import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Feeling extends Component {
  state = {
    feeling: ''
  }

  handleChange = event => {
    this.setState({
      feeling: event.target.value
    });
  }

  render() {
    return (
      <div>
          <h2>1 of 4 pages</h2>
          <p>How are you feeling today?</p>
          <pre><input type='number' value={this.state.feeling} onChange={this.handleChange} /></pre>
          <NextButton page='/2' action={{type: 'FEELING', payload: this.state.feeling}} />
      </div>
    );
  }
}

export default Feeling;
