import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import CreateAdmin from './Admin/createAdmin.component';
import ViewAdmin from './Admin/viewAdmin.component';
import CreateCourse from './Course/createCourse.component';
import ViewCourse from './Course/viewCourse.component';

export default class Dashboard extends Component {

    render() {
      return ( 
        <Router>
            <div class="btn-group btn-group-justified">
                <Link className="btn btn-primary" to="/admin" component={ViewAdmin}>View Admin</Link>
                <Link className="btn btn-primary" to="/admin/create" component={CreateAdmin}>Create Admin</Link>

                 <Link className="btn btn-primary" to="/course" component={ViewCourse}>View Course</Link>
                 <Link className="btn btn-primary" to="/course/create" component={CreateCourse}>Create Course</Link>
                 </div>
                 <Route exact path="/admin" component={ViewAdmin}/>         
                 <Route path="/admin/create" component={CreateAdmin}/> 

                 <Route exact path="/course" component={ViewCourse}/>         
                 <Route path="/course/create" component={CreateCourse}/>     
         </Router>    
      );
    }
  }