import React, { useState } from "react";
import { Form,Button} from 'react-bootstrap';

import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import StudentService from "./services/StudentService";
import FacultyService from "./services/FacultyService";
import AdminService from "./services/AdminService";
import UserProfile from "./components/UserProfile";
import auth from "./hooks/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [message,setMessage] = useState("");
  let history=useHistory();
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    switch(role){
      case "STUDENT":
        StudentService.getByStudentEmail({email: email,password: password}).then((result)=>{
          if(password===result.data.password){
          
          UserProfile.setId(result.data.student_id);
          UserProfile.setName(result.data.name);
          UserProfile.setEmail(result.data.email);
          UserProfile.setRole(result.data.role);
          UserProfile.setC1(result.data.course);
          UserProfile.setAttend(result.data.attendance);
          UserProfile.setAdd(result.data.address);
          auth.login(() => {
            history.push("/Student")
          });
          }else{
            setMessage("Invalid Email,Password or Role");
          }
          
          });
          break;
      case "FACULTY":
        FacultyService.getByFacultyEmail({email: email,password: password}).then((result)=>{
          if(password===result.data.password){
          UserProfile.setId(result.data.faculty_id);
          UserProfile.setName(result.data.name);
          UserProfile.setEmail(result.data.email);
          UserProfile.setRole(result.data.role);
          UserProfile.setC1(result.data.course1);
          UserProfile.setC2(result.data.course2);
          UserProfile.setC3(result.data.course3);
          UserProfile.setAttend(result.data.attendance);
          UserProfile.setAdd(result.data.address);
          auth.login(() => {
            history.push("/Faculty")
          });
          }else{
            setMessage("Invalid Email,Password or Role");
          }
        });
          break;
      case "ADMIN":
        AdminService.getByAdminEmail({email: email,password: password}).then((result)=>{
          if(password===result.data.password){
          UserProfile.setId(result.data.admin_id);
          UserProfile.setName(result.data.name);
          UserProfile.setEmail(result.data.email);
          UserProfile.setRole(result.data.role);
          auth.login(() => {
            history.push("/Admin")
          });
        }else{
          setMessage("Invalid Email,Password or Role");
        }
        });
          break;
      default:
        setMessage("Invalid Email,Password or Role");
    }       
  }

  return (
    <div className="Login">
      <div className="part1">
      <img className="img" src="./images/11.jpg" alt=""></img></div>
      <div className="part2">
      <p>{message}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorizontalCourse">
            <Form.Label column sm={2}>
            Role
            </Form.Label>
            <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="STUDENT" key="1">STUDENT</option>
                <option value="FACULTY" key="2">FACULTY</option>
                <option value="ADMIN" key="3">ADMIN</option>
            </Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <br></br>
      <div><Link to="./StudentRegistration"><Button variant="outline-success">Student Registration</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="./FacultyRegistration"><Button variant="outline-success">Faculty Registration</Button></Link></div></div>
    </div>
  );
}