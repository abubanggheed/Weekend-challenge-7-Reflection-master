import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ThankYou extends Component {
  componentDidMount(){
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.feedback
    }).then( response => {

    }).catch( error => {
      console.log('ERROR:', error);
      alert('server down! try again later');
    });
  }

  render() {
    return (
      <div>
          <h2>Thank You!</h2>
      </div>
    );
  }
}

const mapReduxToProps = state => ({
  feedback: state
});

export default connect(mapReduxToProps)(ThankYou);
