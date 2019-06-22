import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get('http://localhost:4000/admin/'+this.props.admin.username)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

  render() {
    return (
    <tr>
         <td>{this.props.admin.username}</td>
         <td>{this.props.admin.firstName}</td>
         <td>{this.props.admin.lastName}</td>
        <td>
          <Link to={"/update/"+this.props.admin.username} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
    </tr>
    );
  }
}

export default TableRow;