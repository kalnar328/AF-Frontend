import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import SubmissionTable from './submission.tabel';

export default class ViewSubmissions extends Component{

    constructor(props){
        super(props);
        this.state = {
            submissions : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/submission/')
            .then(response => {
                this.setState({submissions: response.data})
            })
            .catch(function(error){
                console.log(error);
            });
    }

    submissionList(){
        return this.state.submissions.map(function(currentSubmission, i){
            return <SubmissionTable submissions = {currentSubmission} key={i} />
        })
    }

    render(){
        return(
            <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student ID</th>
                        <th>Date</th>
                        <th>Status</th>
                      
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.submissionList()}
                </tbody>
            </table>
        </div>
        );
    }
}