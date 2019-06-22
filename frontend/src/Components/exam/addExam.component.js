import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class addExam extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      assignmentExamCode: "",
      description: "",
      courseCode: "",
      typeOfExam: "",
      marks: "",
      deadlineDate: ""
    };
  }
  onChangeAssignmentCode = e => {
    this.setState({
      assignmentExamCode: e.target.value
    });
  };
  onChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onChangeCourseCode = e => {
    this.setState({
      courseCode: e.target.value
    });
  };
  onChangeTypeOfExam = e => {
    this.setState({
      typeOfExam: e.target.value
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
      assignmentExamCode: this.state.assignmentExamCode,
      courseCode: this.state.courseCode,
      description: this.state.description,
      marks: this.state.marks,
      deadlineDate: this.state.deadlineDate,
      typeOfExam: this.state.typeOfExam
    };

    if (
      newExam.assignmentExamCode == "" ||
      newExam.courseCode == "" ||
      newExam.deadlineDate == "" ||
      newExam.description == "" ||
      newExam.marks == "" ||
      newExam.typeOfExam == ""
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
            <label>assignmentExamCode</label>
            <input
              type="text"
              className="form-control"
              value={this.state.assignmentExamCode}
              onChange={this.onChangeAssignmentCode}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>courseCode</label>
            <input
              type="text"
              className="form-control"
              value={this.state.courseCode}
              onChange={this.onChangeCourseCode}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>typeOfExam</label>
            <input
              type="text"
              className="form-control"
              value={this.state.typeOfExam}
              onChange={this.onChangeTypeOfExam}
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
