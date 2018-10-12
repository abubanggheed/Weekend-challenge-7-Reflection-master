import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Feeling extends Component {
  render() {
    return (
      <div>
          <h2>1 of 4 pages</h2>
          <NextButton page='/2' />
      </div>
    );
  }
}

export default Feeling;
