import React, { Component } from 'react';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
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
      <Card>
          <h2>2 of 4 pages</h2>
          <p>How well ar you understanding the content?</p>
          <FormControl>
              <RadioGroup value={this.state.understanding} onChange={this.handleChange}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          <NextButton page='/3' action={{type: 'UNDERSTANDING', payload: this.state.understanding}} />
      </Card>
    );
  }
}

export default Understanding;
