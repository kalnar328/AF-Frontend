import React, { Component } from "react";
import axios from "axios";
import CourseTableRow from "./course.table";

export default class ViewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  coursesList() {
    return this.state.courses.map(function(currentCourse, i) {
      return <CourseTableRow course={currentCourse} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course Code </th>
              <th>Course Name</th>
              <th>Instructors</th>
              <th>Modules</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.coursesList()}</tbody>
        </table>
      </div>
    );
  }
}
