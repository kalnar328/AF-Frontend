import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AssignmentTableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios
      .delete("http://localhost:4000/assignment/" + this.props.assignment._id)
      .then(res => {
        console.log("Deleted");
        alert("Assignment deleted Successfully");
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.assignment.assignmentExamCode}</td>
        <td>{this.props.assignment.description}</td>
        <td>{this.props.assignment.courseCode}</td>
        <td>{this.props.assignment.typeOfExam}</td>
        <td>{this.props.assignment.marks}</td>
        <td>{this.props.assignment.deadlineDate}</td>
        <td>
          <Link
            to={"/update/" + this.props.assignment.id}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default AssignmentTableRow;
