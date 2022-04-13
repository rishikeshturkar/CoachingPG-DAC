import React,{Component } from "react";

import StudentService from "../../services/StudentService";
import {withRouter} from "react-router-dom";

class StudentList extends Component{
    constructor(props){
       super(props);
       console.log("Studentlist constructor");
       this.state={
           emparr:[],
           flag:false,
           searcharr:[]
       }
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in Studentlist componentDidMount");
      StudentService.getStudents().then((response)=>{
         this.setState({emparr:response.data,searcharr:response.data})
         console.log(this.state.emparr)

      })
    }
    ///this method is called continuously even if small change happen
    // its prferable to put code always inside some condition
    componentDidUpdate(prevProps,prevState){

        if(this.state.flag===true){
            console.log("in Studentlist componentDidupdate");
            StudentService.getStudents().then((response)=>{
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
            //in Student name but if search text is empty then searcharr and emparr should be same
           if(this.state.searchtext!==""){
            this.setState({searcharr:this.state.emparr.filter((emp)=>{
                return emp.name.includes(this.state.searchtext);

            })});
        }
        else{
            this.setState({searcharr:this.state.emparr});
        }  
        }


    }
    addStudent=()=>{
        // let history=useHistory();
        this.props.history.push("/Admin/Students/add/_add")
    }
    editStudent=(empid)=>{
        console.log("in emplist edit emp");
        // let history=useHistory();
        this.props.history.push(`/Admin/Students/add/${empid}`)
    }
    deleteStudent=(empid)=>{
        StudentService.deleteStudent(empid).then((response)=>{
            //modify the the value of flag to true
            this.setState({flag:true});
            this.props.history.push("/");
            this.props.history.replace("/Admin");
        })
    }
   render(){
       console.log("in Student render")
       return (<div>
           <div className="row col-md-12">
               <button className="col-md-3 btn btn-primary " onClick={this.addStudent}> Add Student</button>

               <input className="row col-md-6" type="text" name="search" placeholder="Search  Student " value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               <button className="row col-md-3 btn btn-primary" onClick={this.searchStudent}> search</button>
           </div>
           
           <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                  <tr><th>Student Id</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Attendance</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.searcharr.map((emp)=>
                            <tr key={emp.student_id}>
                                <td>{emp.student_id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.course}</td>
                                <td>{emp.attendance}</td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>this.editStudent(emp.student_id)}>UPDATE</button>
                                    <button className="btn btn-danger" onClick={()=>this.deleteStudent(emp.student_id)}>DELETE</button>
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

export default withRouter(StudentList);
