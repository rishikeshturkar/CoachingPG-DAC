import React,{Component} from "react";
import { Form,Button} from 'react-bootstrap';

import { withRouter } from "react-router-dom";
import CourseService from "../../services/CourseService ";

import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class CourseAdd extends Component{
constructor(props){
    super(props)
    this.state={
        // for add url /add/_add it will retrive _add from url 
        //or for update url will /add/1234 Course id receiving via url
        op:this.props.match.params.id,  ///either _add or actual empid
        course_id:"",
        course_fee:"",
        course_name:"",
        course_duration:""
    }
}
componentDidMount(){
    console.log("in CourseAddComponentdidMount"+this.state.op);
    const response = CourseService.getCourses();
    this.setState({courseData:response.data});
    if(this.state.op==="_add"){
        console.log("in add Course");
        return;
    }
    else{
        //to send get request to webservice and get the object which matches with id
        CourseService.getById(this.state.op).then((response)=>{
            let empob=response.data;
            this.setState({course_id:empob.course_id,course_fee:empob.course_fee,course_name:empob.courseName,course_duration:empob.course_duration});
        })

    }
}

 addOrUpdate=(event)=>{
    event.preventDefault(); // to stop the refreshing the page
    // let history=useHistory();
    console.log(this.state)
    //create a objevct using form data to send it nodejs sertvice to add in the databse
    let emp={course_id:this.state.course_id,course_fee:this.state.course_fee,courseName:this.state.course_name,course_duration:this.state.course_duration};
    if(this.state.op==="_add"){
        CourseService.addCourse(emp).then((result)=>{
             console.log(result.data);
             this.props.history.push("/");
             this.props.history.replace("/Admin")
        })
    }
    else{
       
       CourseService.updateCourse(emp).then((response)=>{
           console.log(response.data);
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
       <Form>
       <Form.Group className="mb-3" controlId="formBasiccourse_id">
           <Form.Label>Course Id</Form.Label>
           <Form.Control type="number" placeholder="Enter Id" disabled
           value={this.state.course_id} 
           onChange={(event)=>this.setState({course_id:event.target.value})}/>
           
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasiccourse_name">
           <Form.Label>Course Name</Form.Label>
           <Form.Control type="text" placeholder="Enter Course Name"
           value={this.state.course_name} 
           onChange={(event)=>this.setState({course_name:event.target.value})}/>
           
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasiccourse_fee">
           <Form.Label>Course Fee</Form.Label>
           <Form.Control type="number" placeholder="Enter Course Fee" 
            value={this.state.course_fee} 
            onChange={(event)=>this.setState({course_fee:event.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasiccourse_duration">
           <Form.Label>Course Duration</Form.Label>
           <Form.Control type="number" placeholder="Enter Course Duration" 
            value={this.state.course_duration} 
            onChange={(event)=>this.setState({course_duration:event.target.value})}/>
       </Form.Group>
       <Button variant="primary" type="submit" onClick={this.addOrUpdate}>
           Add or Update Course
       </Button>
       <course_duration to="/Admin"> 
            <button type="button" className="btn btn btn-course_duration">BACK</button> 
        </course_duration> 
       </Form>
    </div>
    )

}
}

export default withRouter(CourseAdd);