import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class StudentTable extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:4000/student/' + this.props.student._id)
            .then(res => {
                console.log('Deleted');
                alert('Student details deleted Successfully');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>{this.props.student._id}</td>
                <td>{this.props.student.firstName}</td>
                <td>{this.props.student.lastName}</td>
                <td>{this.props.student.email}</td>
                <td>{this.props.student.studentID}</td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}