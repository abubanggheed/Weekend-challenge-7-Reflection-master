import React, { Component } from 'react';
import FormCard from '../FormCard/FormCard';

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
          <FormCard category='support' nextPage='/4' />
      </div>
    );
  }
}

export default Support;
