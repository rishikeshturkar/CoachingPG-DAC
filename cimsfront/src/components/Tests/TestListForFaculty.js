import React,{Component } from "react";

import TestService from "../../services/TestService";
import {Link,withRouter} from "react-router-dom";

class TestList extends Component{
    constructor(props){
       super(props);
       console.log("Testlist constructor");
       this.state={
           emparr:[],
           flag:false,
           searcharr:[]
       }
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in Testlist componentDidMount");
      TestService.getTests().then((response)=>{
         this.setState({emparr:response.data,searcharr:response.data})
         console.log(this.state.emparr)

      })
    }
    ///this method is called continuously even if small change happen
    // its prferable to put code always inside some condition
    componentDidUpdate(prevProps,prevState){

        if(this.state.flag===true){
            console.log("in Testlist componentDidupdate");
            TestService.getTests().then((response)=>{
                this.setState({emparr:response.data})
                console.log(this.state.emparr)
                this.setState({flag:false})
       
             });

        } 
        //when searchtext changes then filtering will happen
        //if search text is empty then searcharr and emparr are same
        // otherwise saercharr will contain only values which matches the searchtext
        if(prevState.searchtext!==this.state.searchtext){
            console.log("in change searchtext---  "+prevState.searchtext+"------"+this.state.searchtext);
            ///it will store all emplyee objects in searcharr which includes searchstring 
            //in Test name but if search text is empty then searcharr and emparr should be same
           if(this.state.searchtext!==""){
            this.setState({searcharr:this.state.emparr.filter((emp)=>{
                return emp.course.includes(this.state.searchtext);

            })});
        }
        else{
            this.setState({searcharr:this.state.emparr});
        }  
        }


    }
    addTest=()=>{
        // let history=useHistory();
        this.props.history.push("/Faculty/Tests/add/_add")
    }
    editTest=(empid)=>{
        console.log("in emplist edit emp");
        // let history=useHistory();
        this.props.history.push(`/Faculty/Tests/add/${empid}`)
    }
    deleteTest=(empid)=>{
        TestService.deleteTest(empid).then((response)=>{
            //modify the the value of flag to true
            this.setState({flag:true});
            this.props.history.push("/");
            this.props.history.replace("/Faculty");
        })
    }
   render(){
       console.log("in Test render")
       return (<div>
           <div className="row col-md-12">
               <button className="col-md-3 btn btn-primary " onClick={this.addTest}> Add Test</button>

               <input className="row col-md-6" type="text" name="search" placeholder="Search  Subject" value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               <button className="row col-md-3 btn btn-primary" onClick={this.searchTest}> search</button>
           </div>
           
           <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                  <tr><th>Test Id</th>
                  <th>Course</th>
                  <th>Topic</th>
                  <th colSpan={3}>Test Features</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.searcharr.map((emp)=>
                            <tr key={emp.testId}>
                                <td>{emp.testId}</td>
                                <td>{emp.course}</td>
                                <td>{emp.topic}</td>
                                
                                <td>
                                    <button className="btn btn-success" onClick={()=>this.editTest(emp.testId)}>UPDATE</button>
                                    <button className="btn btn-danger" onClick={()=>this.deleteTest(emp.testId)}>DELETE</button>
                                    <Link to={`/Faculty/Tests/view/${emp.testId}`}><button className="btn btn-success">VIEW</button></Link>
                                </td>
                                
                            </tr>
                          )
                      }
                  </tbody>
              </table>

           </div>
       </div>)
   }
}

export default withRouter(TestList);
