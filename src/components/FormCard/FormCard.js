import React, { Component } from 'react';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import NextButton from '../NextButton/NextButton';

class FormCard extends Component {
  state = {
    feeling: ''
  }

  handleChange = event => {
    this.setState({
      [this.props.category]: event.target.value
    });
  }

  render() {
    return (
        <Card>
            <FormControl>
              <RadioGroup value={this.state[this.props.category]} onChange={this.handleChange} row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          <NextButton page={this.props.nextPage} payload={this.state} />
        </Card>
    );
  }
}

export default FormCard;
