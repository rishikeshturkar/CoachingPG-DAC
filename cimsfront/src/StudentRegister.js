import React, { useEffect, useState } from "react";
import { Form,Button,Row,Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CourseService from "./services/CourseService ";
import StudentService from "./services/StudentService";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StudentRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [message,setMessage] =useState("");
    const [course,setCourse] = useState("Select Course");

    let [courseData, setCourseData] = useState([]);
    // useEffect(async() =>{
    //         try {
    //             const response = await CourseService.getCourses();
    //             const result = response.data;
    //             setCourseData(result);
    //             return result;
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     },[]);
        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await CourseService.getCourses();
                    const result = response.data;
                    setCourseData(result);
                    return result;
                } catch (err) {
                    console.log(err);
                }
              // ...
            }
            fetchData();
          }, []); // Or [] if effect doesn't need props or state
  
    let history=useHistory();

    function handleSubmit(event) {event.preventDefault();
        let student={name:name,email:email,password:password,course:course,address:address};
        StudentService.addStudent(student).then((result)=>{
            
        console.log(result.data);
        history.push("/")
    });
    }

    return (
        <div className="Login">
            <h1>STUDENT REGISTRATION</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
            Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="Name" value={name} 
                onChange={(e) => setName(e.target.value)}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
            <Form.Label column sm={2}>
            Confirm Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Confirm Password" 
            onChange={(e) => setMessage((password===e.target.value)?"":"Password Mismatch")} />
            <p>{message}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCourse">
            <Form.Label column sm={2}>
            Course
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="select" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option>Select a Course</option>
            {courseData.map(opt => (
                <option value={opt.courseName} key={opt.course_id}>{opt.courseName}</option>
            ))}
            </Form.Control>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
            <Form.Label column sm={2}>Address</Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)}/>
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Register</Button>
            </Col>
        </Form.Group>
    </Form>
    </div>
    );
};