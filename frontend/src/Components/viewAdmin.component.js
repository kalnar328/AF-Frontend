import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import AdminTableRow from './admin.table'

// const Admin = props => (
//     <tr>
//         <td>{props.admin.username}</td>
//         <td>{props.admin.firstName}</td>
//         <td>{props.admin.lastName}</td>
//         <td><Link to={"/update/"+props.admin.username}>Edit</Link></td>
//         <td><Link to={"/delete/"+props.admin.delete} onClick={this.delete}>Delete</Link></td>
//     </tr>
// )

export default class ViewAdmin extends Component{

    constructor(props){
        super(props);
        this.state = {
            admins: []
        }
        // this.delete = this.delete.bind(this);
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
            // return <Admin admin = {currentAdmin} key={i} />
            return <AdminTableRow admin = {currentAdmin} key={i} />
        })
    }

    // delete() {
    //     axios.get('http://localhost:4000/admin/'+this.props.username)
    //         // .then(console.log('Deleted'))
    //         .then(res => console.log(res.data))
    //         .then(data => {
    //             alert('Admin registered successfully');                 
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

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
                {/* <button type="submit" className="btn btn-primary ml-3" onClick={this.onClickReserve}>Reserve</button> */}
            </div>
        );
    }
}