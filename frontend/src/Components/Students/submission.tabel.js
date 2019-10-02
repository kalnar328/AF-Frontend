import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SubmissionTable extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:4000/submission/' + this.props.submissions._id)
            .then(res => {
                console.log('Deleted');
                alert('Submission details deleted Successfully');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>{this.props.submissions._id}</td>
                <td>{this.props.submissions.StudentID}</td>
                <td>{this.props.submissions.Date}</td>
                <td>{this.props.submissions.Status}</td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}