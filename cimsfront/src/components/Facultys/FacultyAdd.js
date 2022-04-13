import React,{Component} from "react";
import { Form,Button,Row,Col} from 'react-bootstrap';
import FacultyService from "../../services/FacultyService";
import { withRouter } from "react-router-dom";
import CourseService from "../../services/CourseService ";

import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class FacultyAdd extends Component{
constructor(props){
    super(props)
    this.state={
        // for add url /add/_add it will retrive _add from url 
        //or for update url will /add/1234 Faculty id receiving via url
        op:this.props.match.params.id,  ///either _add or actual empid
        faculty_id:"",
        name:"",
        email:"",
        password:"",
        address:"",
        course1:"",
        course2:"",
        course3:"",
        courseData:[]
    }
}
componentDidMount(){
    console.log("in FacultyAddComponentdidMount"+this.state.op);
    
      CourseService.getCourses().then((response)=>{
         this.setState({courseData:response.data})
         console.log(this.state.courseData)});
    
    if(this.state.op==="_add"){
        console.log("in add Faculty");
        return;
    }
    else{
        //to send get request to webservice and get the object which matches with id
        FacultyService.getById(this.state.op).then((response)=>{
            let empob=response.data;
            this.setState({faculty_id:empob.faculty_id,
                name:empob.name,
                email:empob.email,
                password:empob.password,
                address:empob.address,
                course1:empob.course1,
                course2:empob.course2,
                course3:empob.course3
            });
        })

    }
}

 addOrUpdate=(event)=>{
    event.preventDefault(); // to stop the refreshing the page
    // let history=useHistory();
    console.log(this.state)
    //create a objevct using form data to send it nodejs sertvice to add in the databse
    let emp={faculty_id:this.state.faculty_id,
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        course1:this.state.course1,
        course2:this.state.course2,
        course3:this.state.course3,
        address:this.state.address};
    if(this.state.op==="_add"){
        FacultyService.addFaculty(emp).then((result)=>{
            
             this.props.history.push("/");
             this.props.history.replace("/Admin")
        })
    }
    else{
       
       FacultyService.updateFaculty(emp).then((response)=>{
        this.props.history.push("/");
           this.props.history.replace("/Admin")
       }).catch((err)=>{
           console.log("error occured",err);
       })
    }
}


render(){
    return(
        <div className="Login">
            <h1>Faculty Details</h1>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalFacultyId">
            <Form.Label column sm={2}>
            Faculty Id
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Faculty Id" disabled
            value={this.state.Faculty_id}
            onChange={(event)=>this.setState({Faculty_id:event.target.value})}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
            Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Faculty Name" 
            value={this.state.name}
            onChange={(event)=>this.setState({name:event.target.value})}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Faculty Email" 
            value={this.state.email}
            onChange={(event)=>this.setState({email:event.target.value})}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCourse">
            <Form.Label column sm={2}>
            Course
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="select" value={this.state.course1} onChange={(e) => this.setState({course1:e.target.value})}>
            <option>Select First Course</option>
            {this.state.courseData.map(opt => (
                <option value={opt.courseName} key={opt.course_id}>{opt.courseName}</option>
            ))}
            </Form.Control>
            <Form.Control as="select" value={this.state.course2} onChange={(e) => this.setState({course2:e.target.value})}>
            <option>Select Second Course</option>
            {this.state.courseData.map(opt => (
                <option value={opt.courseName} key={opt.course_id}>{opt.courseName}</option>
            ))}
            </Form.Control>
            <Form.Control as="select" value={this.state.course3} onChange={(e) => this.setState({course3:e.target.value})}>
            <option>Select Third Course</option>
            {this.state.courseData.map(opt => (
                <option value={opt.courseName} key={opt.course_id}>{opt.courseName}</option>
            ))}
            </Form.Control>
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({password:e.target.value})} />
            </Col>
        </Form.Group>

        {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalAttendance">
            <Form.Label column sm={2}>
             Attendance 
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="number" placeholder="Faculty Attendance" 
            value={this.state.attendance}
            onChange={(event)=>this.setState({attendance:event.target.value})}/>
            
            </Col>
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
            <Form.Label column sm={2}>
                Address   
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" rows={3} value={this.state.address}
            onChange={(event)=>this.setState({address:event.target.value})}/>
            </Col>
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={this.addOrUpdate}>
           Add or Update Faculty Details
         </Button>
        <Link to="/Admin"> 
            <button type="button" className="btn btn btn-link">BACK</button> 
        </Link> 
    </Form>
    </div>
    )

}
}

export default withRouter(FacultyAdd);