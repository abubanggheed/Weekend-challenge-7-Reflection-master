import React, { Component } from 'react';
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
      <div>
          <h2>3 of 4 pages</h2>
          <p>Any comments you want to leave?</p>
          <input type="string" value={this.state.comments} onChange={this.handleChange} />
          <SubmitButton action={{type: 'COMMENTS', payload: this.state.comments}} />
      </div>
    );
  }
}

export default Comments;
