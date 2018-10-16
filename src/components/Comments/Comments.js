import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import SubmitButton from '../SubmitButton/SubmitButton';

class Comments extends Component {
// similar to form card but uses a text area and submit button
  state = {
    comments: ''
  }

  handleChange = event => {
    this.setState({
      comments: event.target.value
    });
  }

  render() {
    return (
      <Card>
          <h2>4 of 4 pages</h2>
          <p>Any comments you want to leave?</p>
          <textarea type="text" value={this.state.comments} onChange={this.handleChange} />
          <SubmitButton payload={this.state} />
      </Card>
    );
  }
}

export default Comments;
