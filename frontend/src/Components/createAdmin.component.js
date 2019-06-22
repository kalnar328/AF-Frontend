import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class CreateAdmin extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username : '',
            firstName : '',
            lastName : '',
            password : ''
        }
    }
        onChangeUName = (e) => {
            this.setState({
                username : e.target.value
            });
        }
        onChangefName = (e) => {
            this.setState({
                firstName : e.target.value
            });
        }
        onChangelName = (e) => {
            this.setState({
                lastName : e.target.value
            });
        }
        onChangePW = (e) => {
            this.setState({
                password : e.target.value
            });
        }

        onSubmit (e){
            e.preventDefault();
    
            const newAdmin = {
                username : this.state.username,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                password : this.state.password
            };

            if(newAdmin.username == '' || newAdmin.firstName == '' || 
                newAdmin.lastName == '' || newAdmin.password == ''){
                alert('Cannot have empty fields');
            }else{
                axios.get('http://localhost:4000/admin/'+ newAdmin.username)
                .then(res => {
                    var user = JSON.stringify(res.data);                 
                    console.log(user); 
                    if(user != '[]'){
                        alert('Email is already in use');                       
                    }else{
                        axios.post('http://localhost:4000/admin/create', newAdmin)
                        .then(res => console.log(res.data))
                        .then(data => {
                            alert('Admin registered successfully');                 
                        })
                        .catch(err => {
                            console.log(e);
                        });
                    }              
                })
                .catch(err => {
                    console.log(e);
            });
            }
        }

    render(){
        return(
            <div className="container m-5 pb-5s">
                 <form onSubmit = {this.onSubmit}>
                     <div className="form-group col-sm-4">
                         <label>Username</label>
                         <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUName}/>
                     </div>
                     <div className="form-group col-sm-4">
                         <label>First Name</label>
                         <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangefName}/>
                     </div>
                     <div className="form-group col-sm-4">
                         <label>Last Name</label>
                         <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangelName}/>
                     </div>
                     <div className="form-group col-sm-4">
                         <label>Password</label>
                         <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePW}/>
                     </div>
                     <button type="submit" className="btn btn-primary ml-5">Create</button>
                 </form>
             </div>
        );
    }

}
