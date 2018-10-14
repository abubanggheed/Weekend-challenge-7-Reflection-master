import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

class Admin extends Component {

  state = {
    logs: []
  }

  getLogs = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      this.setState({
        logs: response.data
      });
    }).catch(error => {
      console.log('ERROR:', error);
    });
  }

  handleDelete = id => {
    axios({
      method: 'DELETE',
      url: '/feedback',
      params: { id: id }
    }).then(response => {
      this.getLogs();
    }).catch(error => {
      console.log('ERROR:', error);
    });
  }

  componentDidMount() {
    this.getLogs();
  }

  render() {
    return (
      <div>
        <h2>Admin</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Feeling</TableCell>
                <TableCell>Comprehension</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.logs.map(log => (
                <TableRow key={log.id}>
                  <TableCell>{log.feeling}</TableCell>
                  <TableCell>{log.understanding}</TableCell>
                  <TableCell>{log.support}</TableCell>
                  <TableCell>{log.comments}</TableCell>
                  <TableCell><IconButton onClick={() => this.handleDelete(log.id)} aria-label="Delete">
                    <DeleteIcon />
                  </IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Admin;
