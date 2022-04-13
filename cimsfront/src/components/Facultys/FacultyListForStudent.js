import React,{Component } from "react";
import UserProfile from "../UserProfile";
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
      FacultyService.getByCourse(UserProfile.getC1()).then((response)=>{
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
    
   render(){
       console.log("in Faculty render")
       return (<div>
           <div className="row col-md-12">
               

               <input className="row col-md-6 offset-3" type="text" name="search" placeholder="Search  Faculty " value={this.state.searchtext}
               onChange={(event)=>this.setState({searchtext:event.target.value})}/>

               
           </div>
           
           <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                  <tr><th>Faculty Id</th>
                  <th>Faculty Name</th>
                  <th>Email</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.searcharr.map((emp)=>
                            <tr key={emp.faculty_id}>
                                <td>{emp.faculty_id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
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
