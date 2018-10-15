import React, { Component } from 'react';
import FormCard from '../FormCard/FormCard';

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
          <FormCard category='feeling' nextPage='/2' />
        </div>
    );
  }
}

export default Feeling;
