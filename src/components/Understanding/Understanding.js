import React, { Component } from 'react';
import FormCard from '../FormCard/FormCard';

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
          <FormCard category='understanding' nextPage='/3' />
      </div>
    );
  }
}

export default Understanding;
