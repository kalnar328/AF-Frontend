import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import StudentTable from './student.table';


export default class ViewStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: []
        }
    }

       
    componentDidMount(){
        axios.get('http://localhost:4000/student/')
            .then(response => {
                this.setState({students: response.data})
            })
            .catch(function(error){
                console.log(error);
            });
    }

    studentList(){
        return this.state.students.map(function(currentStudent, i){
            return <StudentTable student = {currentStudent} key={i} />
        })
    }

    render(){
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name </th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>StudentID</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.studentList()}
                    </tbody>
                </table>
            </div>
        );
    }
}