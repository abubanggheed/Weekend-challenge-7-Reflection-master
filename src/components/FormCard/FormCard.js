import React, { Component } from 'react';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import NextButton from '../NextButton/NextButton';

class FormCard extends Component {
  state = {
    [this.props.category]: ''
  }

  handleChange = event => {
    this.setState({
      [this.props.category]: event.target.value
    });
  }

  renderButton = () => {
    //renders next button when state is set truthy; on first call of handleChange
    if(this.state[this.props.category]) {
      return (
        <NextButton page={this.props.nextPage} 
        payload={this.state/* determines action the next button sends on click */} />
      );
    }
    return null;
  }

  render() {
    return (
        <Card>
            <h2>{this.props.page} of 4 pages</h2>
            <p>{this.props.title}</p>
            <FormControl>
              <RadioGroup value={this.state[this.props.category]} onChange={this.handleChange} row>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          {this.renderButton()}
        </Card>
    );
  }
}

export default FormCard;
