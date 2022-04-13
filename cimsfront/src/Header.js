import React from "react";
import "./header.css";
import { Row,Col } from "react-bootstrap";
const Header = ()=>{
    return (
    <div class="d">
        <Row>
            <Col sm={1}><img src="./images/21260188.jpg" alt=""></img></Col>
            <Col sm={11}><h1 class="h1">COACHING INSTITUTE MANAGEMENT SYSTEM</h1></Col>
        </Row>
        
        
    </div>
    );
}
export default Header;