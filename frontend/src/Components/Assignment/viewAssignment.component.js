import React, { Component } from "react";
import axios from "axios";
import AssignmentTableRow from "./assignment.table";

export default class ViewExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/assignment/")
      .then(response => {
        this.setState({ assignments: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  assignmentList() {
    return this.state.assignments.map(function(currentAssignment, i) {
      return <AssignmentTableRow exam={currentAssignment} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>assignmentExamCode</th>
              <th>description</th>
              <th>courseCode</th>
              <th>typeOfExam</th>
              <th>marks</th>
              <th>deadlineDate</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.assignmentList()}</tbody>
        </table>
      </div>
    );
  }
}
