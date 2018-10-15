import React, { Component } from 'react';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
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
      <Card>
          <h2>3 of 4 pages</h2>
          <p>How well are you being supported?</p>
          <FormControl>
              <RadioGroup value={this.state.supported} onChange={this.handleChange} row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          <NextButton page='4' payload={this.state}/>
      </Card>
    );
  }
}

export default Support;
