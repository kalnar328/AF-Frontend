import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ExamTableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios
      .delete("http://localhost:4000/exam/" + this.props.exam._id)
      .then(res => {
        console.log("Deleted");
        alert("Exam deleted Successfully");
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.exam.examId}</td>
        <td>{this.props.exam.studentId}</td>
        <td>{this.props.exam.marks}</td>
        <td>{this.props.exam.deadlineDate}</td>
        <td>
          <Link
            to={"/update/" + this.props.exam._id}
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

export default ExamTableRow;
