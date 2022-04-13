import React,{Component } from "react";

import FacultyService from "../../services/FacultyService";
import {withRouter} from "react-router-dom";

class FacultyList extends Component{
    constructor(props){
       super(props);
       console.log("Facultylist constructor");
       this.state={
           emparr:[],
           flag:false,
           searcharr:[]
       }
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in Facultylist componentDidMount");
      FacultyService.getFacultys().then((response)=>{
         this.setState({emparr:response.data,searcharr:response.data})
         console.log(this.state.emparr)

      })
    }
    ///this method is called continuously even if small change happen
    // its prferable to put code always inside some condition
    componentDidUpdate(prevProps,prevState){

        if(this.state.flag===true){
            console.log("in Facultylist componentDidupdate");
            FacultyService.getFacultys().then((response)=>{
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
            //in Faculty name but if search text is empty then searcharr and emparr should be same
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
    addFaculty=()=>{
        // let history=useHistory();
        this.props.history.push("/Admin/Facultys/add/_add")
    }
    editFaculty=(empid)=>{
        console.log("in emplist edit emp");
        // let history=useHistory();
        this.props.history.push(`/Admin/Facultys/add/${empid}`)
    }
    deleteFaculty=(empid)=>{
        FacultyService.deleteFaculty(empid).then((response)=>{
            //modify the the value of flag to true
            this.setState({flag:true});
            this.props.history.push("/");
            this.props.history.replace("/Admin");
        })
    }
   render(){
       console.log("in Faculty render")
       return (<div>
           <div className="row col-md-12">
               <button className="col-md-3 btn btn-primary " onClick={this.addFaculty}> Add Faculty</button>

               <input className="row col-md-6" type="text" name="search" placeholder="Search  Faculty " value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               <button className="row col-md-3 btn btn-primary" onClick={this.searchFaculty}> search</button>
           </div>
           
           <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                  <tr><th>Faculty Id</th>
                  <th>Faculty Name</th>
                  <th>Email</th>
                  <th colSpan={3}>Courses</th><th></th><th></th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.searcharr.map((emp)=>
                            <tr key={emp.faculty_id}>
                                <td>{emp.faculty_id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.course1}</td><td>{emp.course2}</td><td>{emp.course3}</td>
                                
                                <td>
                                    <button className="btn btn-success" onClick={()=>this.editFaculty(emp.faculty_id)}>UPDATE</button>
                                    <button className="btn btn-danger" onClick={()=>this.deleteFaculty(emp.faculty_id)}>DELETE</button>
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

export default withRouter(FacultyList);
