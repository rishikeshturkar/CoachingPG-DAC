import React,{Component} from "react";
import { Form,Button} from 'react-bootstrap';
import RecordingService from "../../services/RecordingService";
import { Link,withRouter } from "react-router-dom";
import CourseService from "../../services/CourseService ";

import "../../Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class RecordingAdd extends Component{
constructor(props){
    super(props)
    this.state={
        // for add url /add/_add it will retrive _add from url 
        //or for update url will /add/1234 Recording id receiving via url
        op:this.props.match.params.id,  ///either _add or actual empid
        record_id:"",
        course:"",
        subject:"",
        link:"",
        courseData:[]
    }
}
componentDidMount(){
    console.log("in RecordingAddComponentdidMount"+this.state.op);
    CourseService.getCourses().then((response)=>{
        this.setState({courseData:response.data})
        console.log(this.state.courseData)});
    if(this.state.op==="_add"){
        console.log("in add Recording");
        return;
    }
    else{
        //to send get request to webservice and get the object which matches with id
        RecordingService.getById(this.state.op).then((response)=>{
            let empob=response.data;
            this.setState({record_id:empob.record_id,course:empob.course,subject:empob.subject,link:empob.link});
        })

    }
}

 addOrUpdate=(event)=>{
    event.preventDefault(); // to stop the refreshing the page
    // let history=useHistory();
    console.log(this.state)
    //create a objevct using form data to send it nodejs sertvice to add in the databse
    let emp={record_id:this.state.record_id,course:this.state.course,subject:this.state.subject,link:this.state.link};
    if(this.state.op==="_add"){
        RecordingService.addRecording(emp).then((result)=>{
             console.log(result.data);
             this.props.history.push("/");
             this.props.history.replace("/Admin")
        })
    }
    else{
       
       RecordingService.updateRecording(emp).then((response)=>{
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
       <Form.Group className="mb-3" controlId="formBasicRecord_id">
           <Form.Label>Recording Id</Form.Label>
           <Form.Control type="text" placeholder="Enter Id" disabled
           value={this.state.record_id} 
           onChange={(event)=>this.setState({record_id:event.target.value})}/>
           
       </Form.Group>

       <Form.Group className="mb-3" controlId="formHorizontalCourse">
            <Form.Label>
            Course
            </Form.Label>
            
            <Form.Control as="select" value={this.state.course}
            onChange={(event)=>this.setState({course:event.target.value})}>
            <option>Select a Course</option>
            {this.state.courseData.map(opt => (
                <option value={opt.courseName} key={opt.course_id}>{opt.courseName}</option>
            ))}
            </Form.Control>
            
        </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicSubject">
           <Form.Label>Subject</Form.Label>
           <Form.Control type="text" placeholder="Enter Subject" 
            value={this.state.subject} 
            onChange={(event)=>this.setState({subject:event.target.value})}/>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicLink">
           <Form.Label>Recording Link</Form.Label>
           <Form.Control type="text" placeholder="Enter Link" 
            value={this.state.link} 
            onChange={(event)=>this.setState({link:event.target.value})}/>
       </Form.Group>
       
       <Button variant="primary" type="submit" onClick={this.addOrUpdate}>
           Add or Update Recording
       </Button>
       <Link to="/Admin"> 
            <button type="button" className="btn btn btn-link">BACK</button> 
        </Link> 
       </Form>
    </div>
    )

}
}

export default withRouter(RecordingAdd);