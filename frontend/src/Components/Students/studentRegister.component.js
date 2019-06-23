import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class StudentRegister extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            studentID: ''
        }
    }

    onChangefName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangelName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangePW = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangeID = (e) => {
        this.setState({
            studentID: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            password: this.state.password,
            studentID: this.state.studentID,
        }

        if (newUser.email == '' || newUser.firstName == '' || newUser.lastName == ''
            || newUser.password == '' || newUser.studentID == '') {
            alert('Cannot have empty fields');
        }
        else {
            axios.post('http://localhost:4000/student/', newUser)
                .then(res => console.log(res.data))
                .then(data => {
                    alert('You are registered to the system');
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
                        <label>Email</label>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>First Name</label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangefName} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Last Name</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangelName} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Password</label>
                        <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePW} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>studentID</label>
                        <input type="text" className="form-control" value={this.state.studentID} onChange={this.onChangeID} />
                    </div>

                    <button type="submit" className="btn btn-primary ml-5">Create</button>
                </form>
            </div>
        );
    }
}