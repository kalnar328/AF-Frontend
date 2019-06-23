import React, { Component } from "react";
import axios from "axios";
import ExamTableRow from "./exam.table";

export default class ViewExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examsArr: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/exam/")
      .then(response => {
        this.setState({ examsArr: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  examList() {
    return this.state.examsArr.map(function(currentExam, i) {
      return <ExamTableRow exam={currentExam} key={i} />;
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
          <tbody>{this.examList()}</tbody>
        </table>
      </div>
    );
  }
}
