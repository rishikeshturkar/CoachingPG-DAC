

import UserProfile from "./UserProfile";
import { useState } from "react";

import { Form,Row,Col} from 'react-bootstrap';
import StudentService from "../services/StudentService";
import FacultyService from "../services/FacultyService"; 
import AdminService from "../services/AdminService";
export default function ChangePassword(){

    const [password, setPassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [messag,setMessag] =useState("");
    const [message,setMessage] =useState("");

    function handleSubmit(event) {
        event.preventDefault();
        switch(UserProfile.getRole()){
          case "STUDENT":
            StudentService.getByStudentEmail({email: UserProfile.getEmail(),password: password}).then((result)=>{
                let student={student_id:UserProfile.getId(),name:UserProfile.getName(),
                    email:UserProfile.getEmail(),
                    password:newpassword,
                    course:UserProfile.getC1(),
                    address:UserProfile.getAdd()};
                StudentService.updateStudent(student).then((result)=>{
                    window.location.reload();
            });
              });
              break;
          case "FACULTY":
            FacultyService.getByFacultyEmail({email: UserProfile.getEmail(),password: password}).then((result)=>{
                let emp={faculty_id:UserProfile.getId(),
                    name:UserProfile.getName(),
                    email:UserProfile.getEmail(),
                    password:newpassword,
                    course1:UserProfile.getC1(),
                    course2:UserProfile.getC2(),
                    course3:UserProfile.getC3(),
                    address:UserProfile.getAdd()};
                FacultyService.updateFaculty(emp).then((response)=>{
                    console.log(response.data);
                    window.location.reload();
                }).catch((err)=>{
                    console.log("error occured",err);
                })
            });
              break;
          case "ADMIN":
            AdminService.getByAdminEmail({email: UserProfile.getEmail(),password: password}).then((result)=>{
                let emp={admin_id:UserProfile.getId(),
                    name:UserProfile.getName(),
                    email:UserProfile.getEmail(),
                    password:newpassword};
                AdminService.updateAdmin(emp).then((response)=>{
                    console.log(response.data);
                    window.location.reload();
                }).catch((err)=>{
                    console.log("error occured",err);
                })
            });
              break;
          default:
            setMessag("Password change Unsuccessfull");
        }       
      }

    return (
        <div className="card-body">
            {messag}
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Current Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Current Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalNewPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="New Password"
                value={newpassword}
                onChange={(e) => setNewpassword(e.target.value)} />
                </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
                <Form.Label column sm={2}>
                Confirm Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Confirm Password" 
                onChange={(e) => setMessage((newpassword===e.target.value)?"":"Password Mismatch")} />
                <p>{message}</p>
                </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <button type="submit">Change Password</button>
                </Col>
                </Form.Group>
            </Form>
        </div>
        
    )
}