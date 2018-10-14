import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import SubmitButton from '../SubmitButton/SubmitButton';

class Comments extends Component {

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
          <input type="string" value={this.state.comments} onChange={this.handleChange} />
          <SubmitButton action={{type: 'COMMENTS', payload: this.state.comments}} />
      </Card>
    );
  }
}

export default Comments;
