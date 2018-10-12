import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

  state = {
    logs: []
  }

  getLogs = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then( response => {
      this.setState({
        logs: response.data
      });
    }).catch( error => {
      console.log('ERROR:', error);
    });
  }

  handleDelete = id => {
    axios({
      method: 'DELETE',
      url: '/feedback',
      params: {id: id}
    }).then( response => {
      this.getLogs();
    }).catch( error => {
      console.log('ERROR:', error);
    });
  }

  componentDidMount(){
    this.getLogs();
  }

  render() {
    return (
      <div>
          <h2>Admin</h2>
          <table>
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Comprehension</th>
                <th>Support</th>
                <th>Comments</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.logs.map( log => (
                <tr key={log.id}>
                  <td>{log.feeling}</td>
                  <td>{log.understanding}</td>
                  <td>{log.support}</td>
                  <td>{log.comments}</td>
                  <td><button onClick={() => this.handleDelete(log.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}

export default Admin;
