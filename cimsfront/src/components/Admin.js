import React from "react";
import { Tab,Row,Col,Nav,Button} from "react-bootstrap";
import RecordingList from "./Recorded/RecordingList";
import StudentList from "./Students/StudentList";
import FacultyList from "./Facultys/FacultyList";
import TestList from "./Tests/TestList";
import "./use.css";
import { useHistory } from "react-router-dom";
import UserProfile from "./UserProfile";
import CourseList from "./Courses/CourseList";
import UploadNotes from "./Notes/UploadNotes";

import auth from "../hooks/auth";
import ChangePassword from "./ChangePassword";


export default function Admin() {
    let history = useHistory();
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
            <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column tabcolor">
                    <Nav.Item>
                    <Nav.Link eventKey="profile">Welcome  {UserProfile.getName()}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Records">Recording List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="course_list">Course List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="student_list">Student List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="faculty_list">Faculty List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="test_list">Quiz List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="notes">Notes And Notifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="pwd">Change Password</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Button sm={2} variant="dark" onClick={() => {
                        auth.logout(()=> {
                            
                            history.push("/");
                        })
                    }}>LOGOUT</Button>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={10}>
                <Tab.Content>
                    <Tab.Pane eventKey="profile">
                        <h2><i>Admin Id  : </i>{UserProfile.getId()}</h2><br></br>
                        <h2><i>Admin Name  : </i>{UserProfile.getName()}</h2><br></br>
                        <h2><i>Admin Role  : </i>{UserProfile.getRole()}</h2><br></br>
                        <h2><i>Admin Email : </i>{UserProfile.getEmail()}</h2><br></br>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Records">
                        <RecordingList />
                    </Tab.Pane>
                    <Tab.Pane eventKey="course_list">
                        <CourseList/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="student_list">
                        <StudentList/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faculty_list">
                        <FacultyList/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="test_list">
                        <TestList/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="notes">
                        <UploadNotes/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pwd">
                        <ChangePassword/>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}