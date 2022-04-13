import React from "react";
import { Tab,Row,Col,Nav,Button } from "react-bootstrap";
import UserProfile from "./UserProfile";
import "./use.css";
import NotesForStudent from "./Notes/NotesForStudent";
import RecordingListForStudent from "./Recorded/RecordingListForStudent";
import FacultyListForStudent from "./Facultys/FacultyListForStudent";
import CourseDetailForStudent from "./Courses/CourseDetailForStudent";
import auth from "../hooks/auth";
import { useHistory } from "react-router-dom";
import TestListForStudent from "./Tests/TestListForStudent";
import ChangePassword from "./ChangePassword";
export default function Student() {
    let history = useHistory();
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
            <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column tabscol">
                    <Nav.Item>
                    <Nav.Link eventKey="profile">Welcome  {UserProfile.getName()}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="records">Recordings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="notes">Notes And Notifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="faculties">Faculty in Course</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="course">Course Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="tests">MockTest List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="pwd">Change Password</Nav.Link>
                    </Nav.Item>
                    <Button variant="dark" onClick={() => {
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
                        <h2><i>Student Id  : </i>{UserProfile.getId()}</h2><br></br>
                        <h2><i>Student Name  : </i>{UserProfile.getName()}</h2><br></br>
                        <h2><i>Student Role  : </i>{UserProfile.getRole()}</h2><br></br>
                        <h2><i>Student Email : </i>{UserProfile.getEmail()}</h2><br></br>
                        <h2><i>Student Attendance  : </i>{UserProfile.getAttend()}</h2><br></br>
                        <h2><i>Student Address  : </i>{UserProfile.getAdd()}</h2><br></br>
                        <h2><i>Course  : </i>{UserProfile.getC1()}</h2><br></br>
                    </Tab.Pane>
                    <Tab.Pane eventKey="records">
                    <RecordingListForStudent/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="notes">
                    <NotesForStudent/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="faculties">
                    <FacultyListForStudent/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="course">
                    <CourseDetailForStudent/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tests">
                    <TestListForStudent/>
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