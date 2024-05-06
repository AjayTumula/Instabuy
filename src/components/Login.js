import React, { useState } from "react";
import LoginImg from '../assets/2.png';
import {Row, Col, Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login({setUser}) {

    const[email, setEmail] = useState('');
    const navigate = useNavigate();

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
                                    <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} 
                                    placeholder="Enter Email" />                             
                                </Form.Group>
                                <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicPassword">                             
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group> 
                            </div>                                                   
                            <Button onClick={() => {
                                localStorage.setItem('userEmail', email);
                                setUser(email)
                                navigate('/');
                            }} style={{width: '70%', marginBottom: 26, background: '#216ad9', borderWidth: 1, borderColor: 'white'}} outline="outline-light" variant="primary" type="submit">
                                Start Shopping
                            </Button>
                            <div style={{color: 'white'}}>
                                Join the club, <a style={{color: 'white'}} href="/signup">click here</a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <img alt="" src={LoginImg} style={{height: '90vh'}}/>
                </Col>
            </Row>
        </div>
    );
}

export default Login;