import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import swal from 'sweetalert';

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
    //use sweetalert swal for verification dialogue
    swal({
      title: 'Delete this record?',
      icon: 'warning',
      buttons: ['Maybe not', 'Delete it'],
    }).then( willDelete => {
      //yes delete case
      if(willDelete) {
        axios({
          method: 'DELETE',
          url: '/feedback',
          params: { id: id }
        }).then(response => {
          this.getLogs();
          swal('Record deleted.');
        }).catch(error => {
          console.log('ERROR:', error);
        });
      } else{
        //no delete case
        swal('Delete canceled');
      }
    });
  }

  handleFlag = id => {
    axios({
      method: 'PUT',
      url: '/feedback',
      params: { id: id }
    }).then(response => {
      this.getLogs();
    }).catch(error => {
      console.log('ERROR:', error);
    });
  }

  renderFlag = flagged => {
    if(flagged) {
      return (<FlagIcon color="primary" />);
    } else {
      return (<FlagIcon />);
    }
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
              <TableCell>Flag</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*map for array of feedback responses from server*/}
            {this.state.logs.map(log => (
              <TableRow key={log.id}>
                <TableCell>{log.feeling}</TableCell>
                <TableCell>{log.understanding}</TableCell>
                <TableCell>{log.support}</TableCell>
                <TableCell>{log.comments}</TableCell>
                <TableCell><IconButton onClick={() => this.handleFlag(log.id)} aria-label="Delete">
                  {this.renderFlag(log.flagged)}
                </IconButton></TableCell>
                <TableCell><IconButton onClick={() => this.handleDelete(log.id)} aria-label="Delete">
                  <DeleteIcon />
                </IconButton></TableCell>
              </TableRow>
            ))/* end of map */}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
}

export default Admin;
