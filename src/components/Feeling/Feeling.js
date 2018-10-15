import React, { Component } from 'react';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
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
        <Card>
          <h2>1 of 4 pages</h2>
          <p>How are you feeling today?</p>
            <FormControl>
              <RadioGroup value={this.state.feeling} onChange={this.handleChange} row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          <NextButton page='/2' action={{ type: 'SET_ANSWER', payload: this.state }} />
        </Card>
    );
  }
}

export default Feeling;
