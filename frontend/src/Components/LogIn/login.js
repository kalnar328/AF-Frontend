import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddSubmission from '../Students/addSubmission.component';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            email: '',
            password: '',
            users: [],
            adminUsers: [],
            instructor : [],
        }
    }

    onChangeUName = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangeMail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    onChangePW = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };

        axios.get('http://localhost:4000/admin/')
            .then(res =>
                this.setState({ adminUsers: res.data })
            )
            .catch(err => {
                console.log(e);
            });

        axios.get('http://localhost:4000/instructor/')
            .then(res =>
                this.setState({ instructor: res.data })
            )
            .catch(err => {
                console.log(e)
            })

        axios.get('http://localhost:4000/student/')
            .then(res =>
                this.setState({ users: res.data })
            )
            // .then(data => {   
            //         for(var x = 0; x<= this.state.users.length - 1 ; x++ ){
            //             if(newUser.email == this.state.users[x].email){
            //                 alert('User logged in successfully'); 
            //                 ReactDOM.render(<AddSubmission AddSubmission/>, document.getElementById('root'));
            //             }
            //             else{
            //                 alert('Enter the correct credentials');
            //                 this.setState({
            //                     username : '',
            //                     email : '',
            //                     password : '',
            //                 });
            //                 break;
            //             }
            //         }

            // })
            .catch(err => {
                console.log(e);
            });

        if (newUser) {
            for (var x = 0; x <= this.state.users.length - 1; x++) {
                if (newUser.username == this.state.users[x].studentID) {
                    alert('User logged in successfully');
                    ReactDOM.render(<AddSubmission AddSubmission />, document.getElementById('root'));
                }
                else {
                    alert('Enter the correct credentials');
                    this.setState({
                        username: '',
                        email: '',
                        password: '',
                    });
                    break;
                }
            }
        }

         if(newUser){
            for (var x = 0; x <= this.state.users.length - 1; x++) {
                if (newUser.username == this.state.adminUsers[x].username) {
                    alert('User logged in successfully');
                    ReactDOM.render(<AddSubmission AddSubmission />, document.getElementById('root'));
                }
                else {
                    alert('Enter the correct credentials');
                    this.setState({
                        username: '',
                        email: '',
                        password: '',
                    });
                    break;
                }
            }
            }

            if(newUser){
                for (var x = 0; x <= this.state.users.length - 1; x++) {
                    if (newUser.username == this.state.instructor[x].email) {
                        alert('User logged in successfully');
                        ReactDOM.render(<AddSubmission AddSubmission />, document.getElementById('root'));
                    }
                    else {
                        alert('Enter the correct credentials');
                        this.setState({
                            username: '',
                            email: '',
                            password: '',
                        });
                        break;
                    }
                }
                }    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-sm-4">
                        <label>Username</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUName} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeMail} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Password</label>
                        <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePW} />
                    </div>
                    <button type="submit" className="btn btn-primary ml-5">Login</button>
                </form>
            </div>
        );
    }

}