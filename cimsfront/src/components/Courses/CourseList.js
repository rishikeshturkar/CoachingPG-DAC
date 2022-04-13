import React,{Component } from "react";
// import { history } from "../../App";
import CourseService from "../../services/CourseService ";
import {withRouter} from "react-router-dom";

class CourseList extends Component{
    constructor(props){
       super(props);
       console.log("Courselist constructor");
       this.state={
           emparr:[],
           flag:false,
           searcharr:[]
       }
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in Courselist componentDidMount");
      CourseService.getCourses().then((response)=>{
         this.setState({emparr:response.data,searcharr:response.data})
         console.log(this.state.emparr)

      })
    }
    ///this method is called continuously even if small change happen
    // its prferable to put code always inside some condition
    componentDidUpdate(prevProps,prevState){

        if(this.state.flag===true){
            console.log("in Courselist componentDidupdate");
            CourseService.getCourses().then((response)=>{
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
            //in Course name but if search text is empty then searcharr and emparr should be same
           if(this.state.searchtext!==""){
            this.setState({searcharr:this.state.emparr.filter((emp)=>{
                return emp.course_name.includes(this.state.searchtext);
            })});
        }
        else{
            this.setState({searcharr:this.state.emparr});
        }  
        }


    }
    addCourse=()=>{
        // let history=useHistory();
        this.props.history.push("/Admin/Courses/add/_add");
    }
    editCourse=(empid)=>{
        console.log("in emplist edit emp");
        // let history=useHistory();
        this.props.history.push(`/Admin/Courses/add/${empid}`)
    }
    deleteCourse=(empid)=>{
        CourseService.deleteCourse(empid).then((response)=>{
            //modify the the value of flag to true
            this.setState({flag:true});
            this.props.history.push("/");
            this.props.history.replace("/Admin");
        })
    }
   render(){
       console.log("in Course render")
       return (<div>
           <div className="row col-md-12">
               <button className="col-md-3 btn btn-primary " onClick={this.addCourse}> Add Course</button>

               <input className="row col-md-6" type="text" name="search" placeholder="Search  Course" value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               <button className="row col-md-3 btn btn-primary" onClick={this.searchCourse}> search</button>
           </div>
           
           <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                  <tr><th>Course Id</th>
                  <th>Course Name</th>
                  <th>Course Fee</th>
                  <th>Course Duration</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.searcharr.map((emp)=>
                            <tr key={emp.course_id}>
                                <td>{emp.course_id}</td>
                                <td>{emp.courseName}</td>
                                <td>Rs. {emp.course_fee}</td>
                                <td>{emp.course_duration} months</td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>this.editCourse(emp.course_id)}>UPDATE</button>
                                    <button className="btn btn-danger" onClick={()=>this.deleteCourse(emp.course_id)}>DELETE</button>
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

export default withRouter(CourseList);
