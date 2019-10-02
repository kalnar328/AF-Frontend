import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StudentRegister from './studentRegister.component';


export default class AddSubmission extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Date: '',
            StudentID: '',

        }
    }

    onChangeID = (e) => {
        this.setState({
            StudentID: e.target.value
        });
    }

    onChangeDate = (e) => {
        this.setState({
            Date: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();

        const newSubmission = {
            StudentID: this.state.StudentID,
            Date: this.state.Date,
        }


        if (newSubmission.StudentID == '' || newSubmission.Date == '') {
            alert('Cannot have empty fields');
        }
        else {

            axios.post('http://localhost:4000/submission/', newSubmission)
                .then(res => console.log(res.data))
                .then(data => {
                    alert('You have successfully added a submission');
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
                        <label>StudentID</label>
                        <input type="text" className="form-control" value={this.state.StudentID} onChange={this.onChangeID} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Date</label>
                        <input type="date" className="form-control" value={this.state.Date} onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Choose File</label>
                        <input type="file" className="form-control" />
                    </div>


                    <button type="submit" className="btn btn-primary ml-5">Add</button>
                </form>
            </div>
        );
    }

}