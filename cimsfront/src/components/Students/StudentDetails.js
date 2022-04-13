import React,{Component } from "react";
import {Link,withRouter} from "react-router-dom";
import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class StudentDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            record_id:this.props.match.params.id,
            emp:this.props.location.state.emp
        }

    }
    render(){
        return(
            <div className="Login">
              <div className="card col-md-6 offset-md-6">
                <h1>View Student</h1>
                <div  className="card-body">
                    <div className="row">
                        <label>Student ID</label>
                        <div>{this.state.emp.record_id}</div>
                    </div>
                    <div className="row">
                        <label>Course</label>
                        <div>{this.state.emp.course}</div>
                    </div>
                    <div className="row">
                        <label>Subject</label>
                        <div>{this.state.emp.subject}</div>
                    </div>
                    <div className="row">
                        <label>Student Link</label>
                        <div>{this.state.emp.link}</div>
                    </div>
                    <div className="row">
                      <Link to="/Admin"> 
                        <button type="button" className="btn btn-success">BACK</button> 
                       </Link> 
                    </div>

                </div>
            </div>
        </div>
        );
        

    }
}

export default withRouter(StudentDetails);