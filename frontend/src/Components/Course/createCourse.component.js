import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class CreateCourse extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            code : '',
            courseName : '',
            instructors : '',
            modules : ''
        }
    }
        onChangeCode = (e) => {
            this.setState({
                code : e.target.value
            });
        }
        onChangecourseName = (e) => {
            this.setState({
                courseName : e.target.value
            });
        }
        onChangeInstructor = (e) => {
            this.setState({
                instructors : e.target.value
            });
        }
        onChangeModules = (e) => {
            this.setState({
                modules : e.target.value
            });
        }

        onSubmit (e){
            e.preventDefault();
    
            const newCourse = {
                code : this.state.code,
                courseName : this.state.courseName,
                instructors : this.state.instructors,
                modules : this.state.modules
            };

            if(newCourse.code == '' || newCourse.courseName == '' || 
                newCourse.instructors == '' || newCourse.modules == ''){
                alert('Cannot have empty fields');
            }else{
                axios.get('http://localhost:4000/course/'+ newCourse.code)
                .then(res => {
                    var course = JSON.stringify(res.data);                 
                    console.log(course); 
                    if(course != '[]'){
                        alert('Please enter a different code');                       
                    }else{
                        axios.post('http://localhost:4000/course/create', newCourse)
                        .then(res => console.log(res.data))
                        .then(data => {
                            alert('Course added successfully and mails sent to the instructors');                 
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
                         <label>Course Code</label>
                         <input type="text" className="form-control" value={this.state.code} onChange={this.onChangeCode}/>
                     </div>
                     <div className="form-group col-sm-4">
                         <label>Course Name</label>
                         <input type="text" className="form-control" value={this.state.courseName} onChange={this.onChangecourseName}/>
                     </div>
                     <div className="form-group col-sm-4">
                         <label>Instructors</label>
                         <input type="text" className="form-control" value={this.state.instructors} onChange={this.onChangeInstructor}/>
                     </div>
                     <div className="form-group col-sm-4">
                         <label>Modules</label>
                         <input type="text" className="form-control" value={this.state.modules} onChange={this.onChangeModules}/>
                     </div>
                     <button type="submit" className="btn btn-primary ml-5">Create</button>
                 </form>
             </div>
        );
    }

}
