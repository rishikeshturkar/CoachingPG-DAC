import React,{Component} from "react";
import { Form,Button,Row,Col} from 'react-bootstrap';
import StudentService from "../../services/StudentService";
import { withRouter } from "react-router-dom";
import CourseService from "../../services/CourseService ";

import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


class StudentAdd extends Component{
constructor(props){
    super(props)
    this.state={
        // for add url /add/_add it will retrive _add from url 
        //or for update url will /add/1234 Student id receiving via url
        op:this.props.match.params.id,  ///either _add or actual empid
        student_id:"",
        name:"",
        email:"",
        password:"",
        course:"",
        attendance:"",
        address:"",
        courseData:[]
    }
}
componentDidMount(){
    console.log("in StudentAddComponentdidMount"+this.state.op);
    
      CourseService.getCourses().then((response)=>{
         this.setState({courseData:response.data})
         console.log(this.state.courseData)});
    
    if(this.state.op==="_add"){
        console.log("in add Student");
        return;
    }
    else{
        //to send get request to webservice and get the object which matches with id
        StudentService.getById(this.state.op).then((response)=>{
            let empob=response.data;
            this.setState({student_id:empob.student_id,
                name:empob.name,
                email:empob.email,
                password:empob.password,
                course:empob.course,
                attendance:empob.attendance,
                address:empob.address});
        })

    }
}

 addOrUpdate=(event)=>{
    event.preventDefault(); // to stop the refreshing the page
    // let history=useHistory();
    console.log(this.state)
    //create a objevct using form data to send it nodejs sertvice to add in the databse
    let emp={student_id:this.state.student_id,
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        course:this.state.course,
        attendance:this.state.attendance,
        address:this.state.address};
    if(this.state.op==="_add"){
        StudentService.addStudent(emp).then((result)=>{
             
             this.props.history.push("/");
             this.props.history.replace("/Admin")
        })
    }
    else{
       
       StudentService.updateStudent(emp).then((response)=>{
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
            <h1>STUDENT DETAILS</h1>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalStudentId">
            <Form.Label column sm={2}>
            Student Id
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Student Id" disabled
            value={this.state.student_id}
            onChange={(event)=>this.setState({student_id:event.target.value})}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
            Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Student Name" 
            value={this.state.name}
            onChange={(event)=>this.setState({name:event.target.value})}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Student Email" 
            value={this.state.email}
            onChange={(event)=>this.setState({email:event.target.value})}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCourse">
            <Form.Label column sm={2}>
            Course
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="select" value={this.state.course}
            onChange={(event)=>this.setState({course:event.target.value})}>
            <option>Select a Course</option>
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

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAttendance">
            <Form.Label column sm={2}>
             Attendance 
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="number" placeholder="Student Attendance" 
            value={this.state.attendance}
            onChange={(event)=>this.setState({attendance:event.target.value})}/>
            
            </Col>
        </Form.Group>

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
           Add or Update Student Details
         </Button>
        <Link to="/Admin"> 
            <button type="button" className="btn btn btn-link">BACK</button> 
        </Link> 
    </Form>
    </div>
    )

}
}

export default withRouter(StudentAdd);