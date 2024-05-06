import React from "react";
import LoginImg from '../assets/2.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Login() {
    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row>
                <Col>
                    <div>
                        text
                    </div>
                </Col>
                <Col>
                    <img src={LoginImg}/>
                </Col>
            </Row>
        </div>
    );
}

export default Login;