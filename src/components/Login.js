import React from "react";
import LoginImg from '../assets/2.png';
import {Row, Col, Form, Button} from "react-bootstrap";

function Login() {
    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row>
                <Col style={{padding: 100}}>
                    <div>
                        <h1 style={{color: 'white'}}>InstaBuy !</h1>
                        <h3 style={{color: 'white'}}>One place for all your needs</h3>
                        <Form>
                            <div style={{display: 'flex', width: '70%', justifyContent: 'space-between'}}>
                                <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicEmail">                               
                                    <Form.Control type="email" placeholder="Enter Username" />                             
                                </Form.Group>
                                <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicPassword">                             
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group> 
                            </div>                                                   
                            <Button style={{width: '70%', marginBottom: 26, background: '#216ad9', borderWidth: 1, borderColor: 'white'}} outline="outline-light" variant="primary" type="submit">
                                Start Shopping
                            </Button>
                            <div style={{color: 'white'}}>
                                Join the club, <a style={{color: 'white'}} href="/">click here</a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <img src={LoginImg} style={{height: '80vh'}}/>
                </Col>
            </Row>
        </div>
    );
}

export default Login;