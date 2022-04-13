import React,{Component } from "react";
import UserProfile from "../UserProfile";
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

    loadFunction(){
        let cour={
            co1:UserProfile.getC1(),
            co2:UserProfile.getC2(),
            co3:UserProfile.getC3()
        }
        StudentService.getByCourses(cour).then((response)=>{
           this.setState({emparr:response.data,searcharr:response.data})
           console.log(this.state.emparr)
        })
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in Studentlist componentDidMount");
      this.loadFunction();
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
                return emp.course.includes(this.state.searchtext);

            })});
        }
        else{
            this.setState({searcharr:this.state.emparr});
        }  
        }


    }
    
    markPresent=(empid)=>{
        StudentService.getById(empid).then((response)=>{
            let empob=response.data;
            empob.attendance=empob.attendance+1;
            
                StudentService.updateStudent(empob).then((response)=>{
                    console.log(response.data);
                }).catch((err)=>{
                    console.log("error occured",err);
                })
        })
        this.loadFunction();
        
    }

    markAbsent=(empid)=>{
        StudentService.getById(empid).then((response)=>{
            let empob=response.data;
            empob.attendance=empob.attendance-1;
            
                StudentService.updateStudent(empob).then((response)=>{
                    console.log(response.data);
                }).catch((err)=>{
                    console.log("error occured",err);
                })
        })
        this.loadFunction();
    }
    
   render(){
       console.log("in Student render")
       return (<div>
           <div className="row col-md-12">
               

               <input className="row col-md-6 offset-3" type="text" name="search" placeholder="Search  Student By Course " value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               
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
                                <td colSpan={3}>
                                <button className="btn btn-danger" onClick={()=>this.markAbsent(emp.student_id)}>-</button>
                                ---{emp.attendance}---
                                <button className="btn btn-success" onClick={()=>this.markPresent(emp.student_id)}>+</button>
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
