import React,{Component } from "react";

import RecordingService from "../../services/RecordingService";
import {Link,withRouter} from "react-router-dom";

class RecordingList extends Component{
    constructor(props){
       super(props);
       console.log("Recordinglist constructor");
       this.state={
           emparr:[],
           flag:false,
           searcharr:[]
       }
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in Recordinglist componentDidMount");
      RecordingService.getRecordings().then((response)=>{
         this.setState({emparr:response.data,searcharr:response.data})
         console.log(this.state.emparr)

      })
    }
    ///this method is called continuously even if small change happen
    // its prferable to put code always inside some condition
    componentDidUpdate(prevProps,prevState){

        if(this.state.flag===true){
            console.log("in Recordinglist componentDidupdate");
            RecordingService.getRecordings().then((response)=>{
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
            //in Recording name but if search text is empty then searcharr and emparr should be same
           if(this.state.searchtext!==""){
            this.setState({searcharr:this.state.emparr.filter((emp)=>{
                return emp.subject.includes(this.state.searchtext);

            })});
        }
        else{
            this.setState({searcharr:this.state.emparr});
        }  
        }


    }
    addRecording=()=>{
        // let history=useHistory();
        this.props.history.push("/Admin/Recordings/add/_add")
    }
    editRecording=(empid)=>{
        console.log("in emplist edit emp");
        // let history=useHistory();
        this.props.history.push(`/Admin/Recordings/add/${empid}`)
    }
    deleteRecording=(empid)=>{
        RecordingService.deleteRecording(empid).then((response)=>{
            //modify the the value of flag to true
            this.setState({flag:true});
            this.props.history.push("/");
            this.props.history.replace("/Admin");
        })
    }
   render(){
       console.log("in Recording render")
       return (<div>
           <div className="row col-md-12">
               <button className="col-md-3 btn btn-primary " onClick={this.addRecording}> Add Recording</button>

               <input className="row col-md-6" type="text" name="search" placeholder="Search  Subject" value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               <button className="row col-md-3 btn btn-primary" onClick={this.searchRecording}> search</button>
           </div>
           
           <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                  <tr><th>Recording Id</th>
                  <th>Course</th>
                  <th>Subject</th>
                  <th>Recording Link</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.searcharr.map((emp)=>
                            <tr key={emp.record_id}>
                                <td>{emp.record_id}</td>
                                <td>{emp.course}</td>
                                <td>{emp.subject}</td>
                                <td><Link to={emp.link}>{emp.link}</Link></td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>this.editRecording(emp.record_id)}>UPDATE</button>
                                    <button className="btn btn-danger" onClick={()=>this.deleteRecording(emp.record_id)}>DELETE</button>
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

export default withRouter(RecordingList);
