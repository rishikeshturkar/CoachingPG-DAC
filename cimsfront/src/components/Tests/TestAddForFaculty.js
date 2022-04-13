import React,{Component} from "react";
import { Form,Button,Row,Col} from 'react-bootstrap';
import TestService from "../../services/TestService";
import { Link,withRouter } from "react-router-dom";
import CourseService from "../../services/CourseService ";

import "./Tests.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class TestAddForFaculty extends Component{
constructor(props){
    super(props)
    this.state={
        // for add url /add/_add it will retrive _add from url 
        //or for update url will /add/1234 Test id receiving via url
        op:this.props.match.params.id,  ///either _add or actual empid
        courseData:[],
        testId:"",
        course:"",
        topic:"",
        aq1:"",ao1:"",ao2:"",ao3:"",ao4:"",ac1:"",
        bq1:"",bo1:"",bo2:"",bo3:"",bo4:"",bc1:"",
        cq1:"",co1:"",co2:"",co3:"",co4:"",cc1:"",
        dq1:"",do1:"",do2:"",do3:"",do4:"",dc1:"",
        eq1:"",eo1:"",eo2:"",eo3:"",eo4:"",ec1:"",
        fq1:"",fo1:"",fo2:"",fo3:"",fo4:"",fc1:"",
        gq1:"",go1:"",go2:"",go3:"",go4:"",gc1:"",
        hq1:"",ho1:"",ho2:"",ho3:"",ho4:"",hc1:"",
        iq1:"",io1:"",io2:"",io3:"",io4:"",ic1:"",
        jq1:"",jo1:"",jo2:"",jo3:"",jo4:"",jc1:""
    }
}
componentDidMount(){
    console.log("in TestAddComponentdidMount"+this.state.op);

    CourseService.getCourses().then((response)=>{
        this.setState({courseData:response.data})
        console.log(this.state.courseData)});

    if(this.state.op==="_add"){
        console.log("in add Test");
        return;
    }
    else{
        //to send get request to webservice and get the object which matches with id
        TestService.getById(this.state.op).then((response)=>{
            let empob=response.data;
            this.setState(
                {testId:empob.testId,
                    course:empob.course,
                    topic:empob.topic,
                    aq1:empob.aq1, ao1:empob.ao1, ao2:empob.ao2, ao3:empob.ao3, ao4:empob.ao4, ac1:empob.ac1,
                    bq1:empob.bq1, bo1:empob.bo1, bo2:empob.bo2, bo3:empob.bo3, bo4:empob.bo4, bc1:empob.bc1,
                    cq1:empob.cq1, co1:empob.co1, co2:empob.co2, co3:empob.co3, co4:empob.co4, cc1:empob.cc1,
                    dq1:empob.dq1, do1:empob.do1, do2:empob.do2, do3:empob.do3, do4:empob.do4, dc1:empob.dc1,
                    eq1:empob.eq1, eo1:empob.eo1, eo2:empob.eo2, eo3:empob.eo3, eo4:empob.eo4, ec1:empob.ec1,
                    fq1:empob.fq1, fo1:empob.fo1, fo2:empob.fo2, fo3:empob.fo3, fo4:empob.fo4, fc1:empob.fc1,
                    gq1:empob.gq1, go1:empob.go1, go2:empob.go2, go3:empob.go3, go4:empob.go4, gc1:empob.gc1,
                    hq1:empob.hq1, ho1:empob.ho1, ho2:empob.ho2, ho3:empob.ho3, ho4:empob.ho4, hc1:empob.hc1,
                    iq1:empob.iq1, io1:empob.io1, io2:empob.io2, io3:empob.io3, io4:empob.io4, ic1:empob.ic1,
                    jq1:empob.jq1, jo1:empob.jo1, jo2:empob.jo2, jo3:empob.jo3, jo4:empob.jo4, jc1:empob.jc1
                }
            );
        })
    

    }
}

 addOrUpdate=(event)=>{
    event.preventDefault(); // to stop the refreshing the page
    // let history=useHistory();
    console.log(this.state)
    //create a objevct using form data to send it nodejs sertvice to add in the databse
    let emp={testId:this.state.testId,
        course:this.state.course,
        topic:this.state.topic,
        aq1:this.state.aq1, ao1:this.state.ao1, ao2:this.state.ao2, ao3:this.state.ao3, ao4:this.state.ao4, ac1:this.state.ac1,
        bq1:this.state.bq1, bo1:this.state.bo1, bo2:this.state.bo2, bo3:this.state.bo3, bo4:this.state.bo4, bc1:this.state.bc1,
        cq1:this.state.cq1, co1:this.state.co1, co2:this.state.co2, co3:this.state.co3, co4:this.state.co4, cc1:this.state.cc1,
        dq1:this.state.dq1, do1:this.state.do1, do2:this.state.do2, do3:this.state.do3, do4:this.state.do4, dc1:this.state.dc1,
        eq1:this.state.eq1, eo1:this.state.eo1, eo2:this.state.eo2, eo3:this.state.eo3, eo4:this.state.eo4, ec1:this.state.ec1,
        fq1:this.state.fq1, fo1:this.state.fo1, fo2:this.state.fo2, fo3:this.state.fo3, fo4:this.state.fo4, fc1:this.state.fc1,
        gq1:this.state.gq1, go1:this.state.go1, go2:this.state.go2, go3:this.state.go3, go4:this.state.go4, gc1:this.state.gc1,
        hq1:this.state.hq1, ho1:this.state.ho1, ho2:this.state.ho2, ho3:this.state.ho3, ho4:this.state.ho4, hc1:this.state.hc1,
        iq1:this.state.iq1, io1:this.state.io1, io2:this.state.io2, io3:this.state.io3, io4:this.state.io4, ic1:this.state.ic1,
        jq1:this.state.jq1, jo1:this.state.jo1, jo2:this.state.jo2, jo3:this.state.jo3, jo4:this.state.jo4, jc1:this.state.jc1
    };
    if(this.state.op==="_add"){
            TestService.addTest(emp).then((result)=>{console.log(result.data); })
        this.props.history.push("/")
        this.props.history.replace("/Faculty")
        
    }
    else{
            TestService.updateTest(emp).then((response)=>{
                    console.log(response.data);
                }).catch((err)=>{
                    console.log("error occured",err);
                })
        this.props.history.push("/");
        this.props.history.replace("/Faculty")
       
    }
}
render(){
    return(
        <div className="Test">
       <Form>
       <Form.Group as={Row} className="mb-3" controlId="formBasicTestId">
           <Form.Label column sm={1}>TEST ID </Form.Label>
           <Col sm={3}><Form.Control type="number" placeholder="Enter Test Id" 
           value={this.state.testId} 
           onChange={(event)=>this.setState({testId:event.target.value})}/></Col>
           
           <Form.Label column sm={1}>COURSE </Form.Label>
           <Col sm={3}>
           <Form.Control as="select" value={this.state.course}
            onChange={(event)=>this.setState({course:event.target.value})}>
            <option>Select a Course</option>
            {this.state.courseData.map(opt => (
                <option value={opt.courseName} key={opt.course_id}>{opt.courseName}</option>
            ))}
            </Form.Control>
           </Col>
           
           <Form.Label column sm={1}>TOPIC </Form.Label>
           <Col sm={3}><Form.Control type="text" placeholder="Enter Topic" 
            value={this.state.topic} 
            onChange={(event)=>this.setState({topic:event.target.value})}/></Col>
           
       </Form.Group>
                    <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 1</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.aq1} 
                 onChange={(event)=>this.setState({aq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.ao1} 
                 onChange={(event)=>this.setState({ao1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.ao2} 
                 onChange={(event)=>this.setState({ao2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.ao3} 
                 onChange={(event)=>this.setState({ao3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.ao4} 
                 onChange={(event)=>this.setState({ao4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 1</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.ac1} 
                 onChange={(event)=>this.setState({ac1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 2</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.bq1} 
                 onChange={(event)=>this.setState({bq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.bo1} 
                 onChange={(event)=>this.setState({bo1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.bo2} 
                 onChange={(event)=>this.setState({bo2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.bo3} 
                 onChange={(event)=>this.setState({bo3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.bo4} 
                 onChange={(event)=>this.setState({bo4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 2</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.bc1} 
                 onChange={(event)=>this.setState({bc1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 3</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.cq1} 
                 onChange={(event)=>this.setState({cq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.co1} 
                 onChange={(event)=>this.setState({co1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.co2} 
                 onChange={(event)=>this.setState({co2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.co3} 
                 onChange={(event)=>this.setState({co3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.co4} 
                 onChange={(event)=>this.setState({co4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 3</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.cc1} 
                 onChange={(event)=>this.setState({cc1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 4</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.dq1} 
                 onChange={(event)=>this.setState({dq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.do1} 
                 onChange={(event)=>this.setState({do1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.do2} 
                 onChange={(event)=>this.setState({do2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.do3} 
                 onChange={(event)=>this.setState({do3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.do4} 
                 onChange={(event)=>this.setState({do4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 4</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.dc1} 
                 onChange={(event)=>this.setState({dc1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 5</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.eq1} 
                 onChange={(event)=>this.setState({eq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.eo1} 
                 onChange={(event)=>this.setState({eo1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.eo2} 
                 onChange={(event)=>this.setState({eo2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.eo3} 
                 onChange={(event)=>this.setState({eo3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.eo4} 
                 onChange={(event)=>this.setState({eo4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 5</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.ec1} 
                 onChange={(event)=>this.setState({ec1:event.target.value})}/></Col>
            </Form.Group>

                    <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 6</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.fq1} 
                 onChange={(event)=>this.setState({fq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.fo1} 
                 onChange={(event)=>this.setState({fo1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.fo2} 
                 onChange={(event)=>this.setState({fo2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.fo3} 
                 onChange={(event)=>this.setState({fo3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.fo4} 
                 onChange={(event)=>this.setState({fo4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 6</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.fc1} 
                 onChange={(event)=>this.setState({fc1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 7</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.gq1} 
                 onChange={(event)=>this.setState({gq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.go1} 
                 onChange={(event)=>this.setState({go1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.go2} 
                 onChange={(event)=>this.setState({go2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.go3} 
                 onChange={(event)=>this.setState({go3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.go4} 
                 onChange={(event)=>this.setState({go4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 7</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.gc1} 
                 onChange={(event)=>this.setState({gc1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 8</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.hq1} 
                 onChange={(event)=>this.setState({hq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.ho1} 
                 onChange={(event)=>this.setState({ho1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.ho2} 
                 onChange={(event)=>this.setState({ho2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.ho3} 
                 onChange={(event)=>this.setState({ho3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.ho4} 
                 onChange={(event)=>this.setState({ho4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 8</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.hc1} 
                 onChange={(event)=>this.setState({hc1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 9</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.iq1} 
                 onChange={(event)=>this.setState({iq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.io1} 
                 onChange={(event)=>this.setState({io1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.io2} 
                 onChange={(event)=>this.setState({io2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.io3} 
                 onChange={(event)=>this.setState({io3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.io4} 
                 onChange={(event)=>this.setState({io4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 9</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.ic1} 
                 onChange={(event)=>this.setState({ic1:event.target.value})}/></Col>
            </Form.Group>

            <br></br><br></br>
            <Form.Group as={Row}  className="mb-3" controlId="formBasicQuestion">
                <Form.Label column sm={2}>Question 10</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Question" 
                 value={this.state.jq1} 
                 onChange={(event)=>this.setState({jq1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionA">
                <Form.Label column sm={2}>A</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option A" 
                 value={this.state.jo1} 
                 onChange={(event)=>this.setState({jo1:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionB">
                <Form.Label column sm={2}>B</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option B" 
                 value={this.state.jo2} 
                 onChange={(event)=>this.setState({jo2:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionC">
                <Form.Label column sm={2}>C</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option C" 
                 value={this.state.jo3} 
                 onChange={(event)=>this.setState({jo3:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicOptionD">
                <Form.Label column sm={2}>D</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Option D" 
                 value={this.state.jo4} 
                 onChange={(event)=>this.setState({jo4:event.target.value})}/></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicCorrect">
                <Form.Label column sm={2}>Answer 10</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter Answer" 
                 value={this.state.jc1} 
                 onChange={(event)=>this.setState({jc1:event.target.value})}/></Col>
            </Form.Group>


       <Button variant="primary" type="submit" onClick={this.addOrUpdate}>
           Save Test
       </Button>
       <Link to="/Faculty"> 
            <button type="button" className="btn btn btn-link">BACK</button> 
        </Link> 
       </Form>
    </div>
    )

}
}

export default withRouter(TestAddForFaculty);