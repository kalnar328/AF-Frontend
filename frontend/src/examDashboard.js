import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import AddAssignment from './Components/Assignment/addAssignment.component';
import ViewAssignment from './Components/Assignment/viewAssignment.component';

import AddExam from './Components/Exam/addExam.component';
import ViewExam from './Components/Exam/viewExam.component';
import ViewCourse from './Components/Course/viewCourse.component';

export default class ExamDashboard extends Component {

    render() {
      return ( 
        <Router>
            <div class="btn-group btn-group-justified">
                
                <Link className="btn btn-primary" to="/assignment" component={ViewAssignment}>View Assignment</Link>
                <Link className="btn btn-primary" to="/assignment/add" component={AddAssignment}>Add Assignment</Link>

                 <Link className="btn btn-primary" to="/exam" component={ViewExam}>View Exam</Link>
                 <Link className="btn btn-primary" to="/exam/add" component={AddExam}>Create Exam</Link>
                 </div>
                         
                 <Route exact path="/assignment" component={ViewAssignment}/> 
                 <Route path="/assignment/add" component={AddAssignment}/> 

                 <Route exact path="/exam" component={ViewExam}/>          
                 <Route path="/exam/add" component={AddExam}/>     
         </Router>    
      );
    }
  }