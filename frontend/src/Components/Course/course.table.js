import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CourseTableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:4000/course/'+this.props.course.code)
            .then(res=>{
                console.log('Deleted');
                alert('Course deleted Successfully');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

  render() {
    return (
    <tr>
         <td>{this.props.course.code}</td>
         <td>{this.props.course.courseName}</td>
         <td>{this.props.course.instructors}</td>
         <td>{this.props.course.modules}</td>
        <td>
          <Link to={"/update/"+this.props.course.code} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
    </tr>
    );
  }
}

export default CourseTableRow;