import React from "react";
import { Tab,Row,Col,Nav,Button} from "react-bootstrap";
import UserProfile from "./UserProfile";
import UploadNotes from "./Notes/UploadNotes";

import "./use.css";
import StudentListForFaculty from "./Students/StudentListForFaculty";
import RecordingListForFaculty from "./Recorded/RecordingListForFaculty";
import auth from "../hooks/auth";
import { useHistory } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import TestListForFaculty from "./Tests/TestListForFaculty";

export default function Faculty() {
    let history = useHistory();
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
            <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column tabcolo">
                    <Nav.Item>
                    <Nav.Link eventKey="profile">Welcome  {UserProfile.getName()}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="notes">Notes And Notifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Student List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="test_list">Quiz List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="record_list">Recording List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="pwd">Change Password</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
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
                        <h2><i>Faculty Id  : </i>{UserProfile.getId()}</h2><br></br>
                        <h2><i>Faculty Name  : </i>{UserProfile.getName()}</h2><br></br>
                        <h2><i>Faculty Role  : </i>{UserProfile.getRole()}</h2><br></br>
                        <h2><i>Faculty Email : </i>{UserProfile.getEmail()}</h2><br></br>
                        
                        <h2><i>Faculty Address  : </i>{UserProfile.getAdd()}</h2><br></br>
                        <h2><i>Assigned Course 1  : </i>{UserProfile.getC1()}</h2><br></br>
                        <h2><i>Assigned Course 2  : </i>{UserProfile.getC2()}</h2><br></br>
                        <h2><i>Assigned Course 3  : </i>{UserProfile.getC3()}</h2><br></br>
                        
                    </Tab.Pane>
                    <Tab.Pane eventKey="notes">
                    <UploadNotes/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <StudentListForFaculty />
                    </Tab.Pane>
                    <Tab.Pane eventKey="test_list">
                        <TestListForFaculty/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="record_list">
                        <RecordingListForFaculty/>
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