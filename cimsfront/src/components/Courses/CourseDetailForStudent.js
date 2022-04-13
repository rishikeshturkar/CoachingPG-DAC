import React,{Component } from "react";
import {withRouter} from "react-router-dom";
import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseService from "../../services/CourseService ";
import UserProfile from "../UserProfile";
class CourseDetailForStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            
            emp:[]
        }
    }
    componentDidMount(){
        CourseService.getByCourseName(UserProfile.getC1()).then((response)=>{
            this.setState({emp:response.data})
            console.log(this.state.courseData)});
    }

    render(){
        return(
            <div className="Login">
              <div className="card col-md-6 offset-md-3">
                <h1>View Course</h1>
                <div  className="card-body ">
                    <div className="row">
                        <label>Course ID</label>
                        <label>{this.state.emp.course_id}</label>
                    </div>
                    <div className="row">
                        <label>Course Name</label>
                        <label>{this.state.emp.courseName}</label>
                    </div>
                    <div className="row">
                        <label>Course Fee</label>
                        <label>{this.state.emp.course_fee}</label>
                    </div>
                    <div className="row">
                        <label>Course Duration</label>
                        <label>{this.state.emp.course_duration}</label>
                    </div>

                </div>
            </div>
        </div>
        );
        

    }
}

export default withRouter(CourseDetailForStudent);