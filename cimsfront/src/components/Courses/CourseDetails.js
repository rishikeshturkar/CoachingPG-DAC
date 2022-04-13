import React,{Component } from "react";
import {Link,withRouter} from "react-router-dom";
import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class CourseDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            course_id:this.props.match.params.id,
            emp:this.props.location.state.emp
        }

    }
    render(){
        return(
            <div className="Login">
              <div className="card col-md-6 offset-md-6">
                <h1>View Course</h1>
                <div  className="card-body">
                    <div className="row">
                        <label>Course ID</label>
                        <div>{this.state.emp.course_id}</div>
                    </div>
                    <div className="row">
                        <label>Course Name</label>
                        <div>{this.state.emp.courseName}</div>
                    </div>
                    <div className="row">
                        <label>Course Fee</label>
                        <div>{this.state.emp.course_fee}</div>
                    </div>
                    <div className="row">
                        <label>Course Duration</label>
                        <div>{this.state.emp.course_duration}</div>
                    </div>
                    <div className="row">
                      <Link to="/Student"> 
                        <button type="button" className="btn btn-success">BACK</button> 
                       </Link> 
                    </div>

                </div>
            </div>
        </div>
        );
        

    }
}

export default withRouter(CourseDetails);