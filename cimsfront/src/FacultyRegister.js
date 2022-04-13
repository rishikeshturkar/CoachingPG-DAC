import React, { useEffect, useState } from "react";
import { Form,Button,Row,Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import FacultyService from "./services/FacultyService";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FacultyRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [message,setMessage] =useState("");
    
  
    let history=useHistory();

    function handleSubmit(event) {event.preventDefault();
        let Faculty={name:name,email:email,password:password,address:address};
        FacultyService.addFaculty(Faculty).then((result)=>{
        console.log(result.data);
        history.push("/")
    });
    }

    return (
        <div className="Login">
            <h1>FACULTY REGISTRATION</h1>
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