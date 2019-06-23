import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import AdminTableRow from './admin.table'

export default class ViewAdmin extends Component{

    constructor(props){
        super(props);
        this.state = {
            admins: []
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/admin/')
            .then(response => {
                this.setState({admins: response.data})
            })
            .catch(function(error){
                console.log(error);
            });
    }

    adminList(){
        return this.state.admins.map(function(currentAdmin, i){
            return <AdminTableRow admin = {currentAdmin} key={i} />
        })
    }

    render(){
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.adminList()}
                    </tbody>
                </table>
            </div>
        );
    }
}