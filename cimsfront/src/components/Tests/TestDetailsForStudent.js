import React,{Component } from "react";
import {Link,withRouter} from "react-router-dom";
import { Form,Row } from "react-bootstrap";
import "./Tests.css";
import TestService from "../../services/TestService";
import 'bootstrap/dist/css/bootstrap.min.css';

class TestDetailsForStudent extends Component{
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state={
            op:this.props.match.params.id,  ///either _add or actual empid
        courseData:[],
        selectedOption:"",
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
        jq1:"",jo1:"",jo2:"",jo3:"",jo4:"",jc1:"",
        message:"",
        a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"",j:""

        }
    }

componentDidMount(){
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

handleFormSubmit(ev) {
    ev.preventDefault();
    let score=0;
    if(this.state.a===this.state.ac1)
    score++;
    if(this.state.b===this.state.bc1) 
    score++;
    if(this.state.c===this.state.cc1)
    score++;
    if(this.state.d===this.state.dc1)
    score++;
    if(this.state.e===this.state.ec1)
    score++;
    if(this.state.f===this.state.fc1)
    score++;
    if(this.state.g===this.state.gc1)
    score++;
    if(this.state.h===this.state.hc1)
    score++;
    if(this.state.i===this.state.ic1)
    score++;
    if(this.state.j===this.state.jc1)
    score++;
    this.setState({message:score});
    alert("You Scored : " + score);


  }

    render(){
        return(
    <div className="Test card-body">
        
    <Form> 
    <label as={Row}><h3>&nbsp;&nbsp;&nbsp;TEST ID = {this.state.testId}&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;COURSE = {this.state.course}&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;TOPIC = {this.state.topic} &nbsp;&nbsp;&nbsp;</h3></label><br></br><br></br>
    
    <Form.Group>
    <label as={Row}> Question 1 : {this.state.aq1}</label><br></br>
    <label as={Row} >A<input sm={1} type="radio" id={this.state.ao1} name="a1" value={this.state.ao1} checked={this.state.a === this.state.ao1}
                      onChange={e=>(this.setState({a:e.target.value}))}/> {this.state.ao1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.ao2} name="a1" value={this.state.ao2} checked={this.state.a === this.state.ao2}
                      onChange={e=>(this.setState({a:e.target.value}))}/> {this.state.ao2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.ao3} name="a1" value={this.state.ao3} checked={this.state.a === this.state.ao3}
                      onChange={e=>(this.setState({a:e.target.value}))}/> {this.state.ao3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.ao4} name="a1" value={this.state.ao4} checked={this.state.a === this.state.ao4}
                      onChange={e=>(this.setState({a:e.target.value}))}/> {this.state.ao4}</label><br></br><br></br>
    </Form.Group>
     
    <Form.Group>
    <label as={Row}> Question 2 : {this.state.bq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.bo1} name="b1" value={this.state.bo1} checked={ this.state.b === this.state.bo1}
                       onChange={e=>(this.setState({b:e.target.value}))}/> {this.state.bo1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.bo2} name="b1" value={this.state.bo2} checked={ this.state.b === this.state.bo2}
                       onChange={e=>(this.setState({b:e.target.value}))}/> {this.state.bo2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.bo3} name="b1" value={this.state.bo3} checked={ this.state.b === this.state.bo3}
                       onChange={e=>(this.setState({b:e.target.value}))}/> {this.state.bo3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.bo4} name="b1" value={this.state.bo4} checked={ this.state.b === this.state.bo4}
                       onChange={e=>(this.setState({b:e.target.value}))}/> {this.state.bo4}</label><br></br> <br></br>
    </Form.Group>

    <Form.Group>
    <label as={Row}> Question 3 : {this.state.cq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.co1} name="c1" value={this.state.co1} checked={ this.state.c === this.state.co1}
                       onChange={e=>(this.setState({c:e.target.value}))}/> {this.state.co1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.co2} name="c1" value={this.state.co2} checked={ this.state.c === this.state.co2}
                       onChange={e=>(this.setState({c:e.target.value}))}/> {this.state.co2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.co3} name="c1" value={this.state.co3} checked={ this.state.c === this.state.co3}
                       onChange={e=>(this.setState({c:e.target.value}))}/> {this.state.co3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.co4} name="c1" value={this.state.co4} checked={ this.state.c === this.state.co4}
                       onChange={e=>(this.setState({c:e.target.value}))}/> {this.state.co4}</label><br></br><br></br>
    </Form.Group>    
     
    <Form.Group>
    <label as={Row}> Question 4 : {this.state.dq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.do1} name="d1" value={this.state.do1} checked={ this.state.d === this.state.do1}
                       onChange={e=>(this.setState({d:e.target.value}))}/> {this.state.do1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.do2} name="d1" value={this.state.do2} checked={ this.state.d === this.state.do2}
                       onChange={e=>(this.setState({d:e.target.value}))}/> {this.state.do2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.do3} name="d1" value={this.state.do3} checked={ this.state.d === this.state.do3}
                       onChange={e=>(this.setState({d:e.target.value}))}/> {this.state.do3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.do4} name="d1" value={this.state.do4} checked={ this.state.d === this.state.do4}
                       onChange={e=>(this.setState({d:e.target.value}))}/> {this.state.do4}</label><br></br><br></br>
    </Form.Group>
     
    <Form.Group>
    <label as={Row}> Question 5 : {this.state.eq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.eo1} name="e1" value={this.state.eo1} checked={ this.state.e === this.state.eo1}
                       onChange={e=>(this.setState({e:e.target.value}))}/> {this.state.eo1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.eo2} name="e1" value={this.state.eo2} checked={ this.state.e === this.state.eo2}
                       onChange={e=>(this.setState({e:e.target.value}))}/> {this.state.eo2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.eo3} name="e1" value={this.state.eo3} checked={ this.state.e === this.state.eo3}
                       onChange={e=>(this.setState({e:e.target.value}))}/> {this.state.eo3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.eo4} name="e1" value={this.state.eo4} checked={ this.state.e === this.state.eo4}
                       onChange={e=>(this.setState({e:e.target.value}))}/> {this.state.eo4}</label><br></br><br></br>
    </Form.Group>
     
    <Form.Group>
    <label as={Row}> Question 6 : {this.state.fq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.fo1} name="f1" value={this.state.fo1} checked={ this.state.f === this.state.fo1}
                       onChange={e=>(this.setState({f:e.target.value}))}/> {this.state.fo1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.fo2} name="f1" value={this.state.fo2} checked={ this.state.f === this.state.fo2}
                       onChange={e=>(this.setState({f:e.target.value}))}/> {this.state.fo2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.fo3} name="f1" value={this.state.fo3} checked={ this.state.f === this.state.fo3}
                       onChange={e=>(this.setState({f:e.target.value}))}/> {this.state.fo3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.fo4} name="f1" value={this.state.fo4} checked={ this.state.f === this.state.fo4}
                       onChange={e=>(this.setState({f:e.target.value}))}/> {this.state.fo4}</label><br></br><br></br>
    </Form.Group>

    <Form.Group>
    <label as={Row}> Question 7 : {this.state.gq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.go1} name="g1" value={this.state.go1} checked={ this.state.g === this.state.go1}
                       onChange={e=>(this.setState({g:e.target.value}))}/> {this.state.go1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.go2} name="g1" value={this.state.go2} checked={ this.state.g === this.state.go2}
                       onChange={e=>(this.setState({g:e.target.value}))}/> {this.state.go2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.go3} name="g1" value={this.state.go3} checked={ this.state.g === this.state.go3}
                       onChange={e=>(this.setState({g:e.target.value}))}/> {this.state.go3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.go4} name="g1" value={this.state.go4} checked={ this.state.g === this.state.go4}
                       onChange={e=>(this.setState({g:e.target.value}))}/> {this.state.go4}</label><br></br><br></br>
    </Form.Group>

    <Form.Group>
    <label as={Row}> Question 8 : {this.state.hq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.ho1} name="h1" value={this.state.ho1} checked={ this.state.h === this.state.ho1}
                       onChange={e=>(this.setState({h:e.target.value}))}/> {this.state.ho1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.ho2} name="h1" value={this.state.ho2} checked={ this.state.h === this.state.ho2}
                       onChange={e=>(this.setState({h:e.target.value}))}/> {this.state.ho2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.ho3} name="h1" value={this.state.ho3} checked={ this.state.h === this.state.ho3}
                       onChange={e=>(this.setState({h:e.target.value}))}/>{this.state.ho3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.ho4} name="h1" value={this.state.ho4} checked={ this.state.h === this.state.ho4}
                       onChange={e=>(this.setState({h:e.target.value}))}/> {this.state.ho4}</label><br></br> <br></br>
    </Form.Group>

    <Form.Group>
    <label as={Row}> Question 9 : {this.state.iq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.io1} name="i1" value={this.state.io1} checked={ this.state.i === this.state.io1}
                       onChange={e=>(this.setState({i:e.target.value}))}/> {this.state.io1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.io2} name="i1" value={this.state.io2} checked={ this.state.i === this.state.io2}
                       onChange={e=>(this.setState({i:e.target.value}))}/> {this.state.io2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.io3} name="i1" value={this.state.io3} checked={ this.state.i === this.state.io3}
                       onChange={e=>(this.setState({i:e.target.value}))}/> {this.state.io3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.io4} name="i1" value={this.state.io4} checked={ this.state.i === this.state.io4}
                       onChange={e=>(this.setState({i:e.target.value}))}/> {this.state.io4}</label><br></br><br></br>
    </Form.Group>

    <Form.Group>
    <label as={Row}> Question 10 : {this.state.jq1}</label><br></br>
    <label as={Row}>A<input type="radio" id={this.state.jo1} name="j1" value={this.state.jo1} checked={ this.state.j === this.state.jo1}
                       onChange={e=>(this.setState({j:e.target.value}))}/> {this.state.jo1}</label><br></br>
    <label as={Row}>B<input type="radio" id={this.state.jo2} name="j1" value={this.state.jo2} checked={ this.state.j === this.state.jo2}
                       onChange={e=>(this.setState({j:e.target.value}))}/> {this.state.jo2}</label><br></br>
    <label as={Row}>C<input type="radio" id={this.state.jo3} name="j1" value={this.state.jo3} checked={ this.state.j === this.state.jo3}
                       onChange={e=>(this.setState({j:e.target.value}))}/>{this.state.jo3}</label><br></br>
    <label as={Row}>D<input type="radio" id={this.state.jo4} name="j1" value={this.state.jo4} checked={ this.state.j === this.state.jo4}
                       onChange={e=>(this.setState({j:e.target.value}))}/> {this.state.jo4}</label><br></br><br></br>
    </Form.Group>

    You Scored : {this.state.message}<br></br>

    <button className="btn btn-success" type="submit" onClick={this.handleFormSubmit}>SUBMIT</button>
    <Link to="/Student"><button type="button" className="btn btn btn-primary">BACK</button></Link> 
        </Form>
    </div>
        );
    }
}

export default withRouter(TestDetailsForStudent);