import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class addExam extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      examId: "",
      studentId: "",
      marks: "",
      deadlineDate: ""
    };
  }
  onChangeExamId = e => {
    this.setState({
      examId: e.target.value
    });
  };
  onChangeStudentId = e => {
    this.setState({
      studentId: e.target.value
    });
  };
  onChangeMarks = e => {
    this.setState({
      marks: e.target.value
    });
  };
  onChangeDeadlineDate = e => {
    this.setState({
      deadlineDate: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const newExam = {
      examId: this.state.examId,
      studentId: this.state.studentId,
      marks: this.state.marks,
      deadlineDate: this.state.deadlineDate
    };

    if (
      newExam.examId == "" ||
      newExam.studentId == "" ||
      newExam.deadlineDate == "" ||
      newExam.marks == ""
    ) {
      alert("Cannot have empty fields");
    } else {
      axios
        .post("http://localhost:4000/exam", newExam)
        .then(res => console.log(res.data))
        .then(data => {
          alert("Exam added successfully");
        })
        .catch(err => {
          console.log(e);
        });
    }
  }

  render() {
    return (
      <div className="container m-5 pb-5s">
        <form onSubmit={this.onSubmit}>
          <div className="form-group col-sm-4">
            <label>examId</label>
            <input
              type="text"
              className="form-control"
              value={this.state.examId}
              onChange={this.onChangeExamId}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>studentId</label>
            <input
              type="text"
              className="form-control"
              value={this.state.studentId}
              onChange={this.onChangeStudentId}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>marks</label>
            <input
              type="text"
              className="form-control"
              value={this.state.marks}
              onChange={this.onChangeMarks}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>deadlineDate</label>
            <input
              type="text"
              className="form-control"
              value={this.state.deadlineDate}
              onChange={this.onChangeDeadlineDate}
            />
          </div>
          <button type="submit" className="btn btn-primary ml-5">
            Add Exam
          </button>
        </form>
      </div>
    );
  }
}
