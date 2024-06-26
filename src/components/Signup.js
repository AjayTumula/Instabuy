import React, { useState } from "react";
import SignupImg from '../assets/3.png';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Signup({setUser}) {

    const[email, setEmail] = useState('');
    const navigate = useNavigate();

    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row style={{padding: 75}}>
                <Col style={{padding: 100}}>
                    <div>
                        <h1 style={{color: 'white'}}>InstaBuy !</h1>
                        <h5 style={{color: 'white', width: '40%', margin: '20px 0 20px 0'}}>One place where brands come together from all across the world</h5>
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
                            <Form.Group style={{width: '70%'}} className="mb-3" controlId="formBasicPassword">                             
                                    <Form.Control type="text" placeholder="Enter Full Name" />
                            </Form.Group>                                               
                            <Button onClick={() => {
                                localStorage.setItem('userEmail', email);
                                setUser(email);
                                navigate("/")
                            }} style={{width: '70%', marginBottom: 26, background: '#216ad9', borderWidth: 1, borderColor: 'white'}} outline="outline-light" variant="primary" type="submit">
                                Join the Club
                            </Button>
                            <div style={{color: 'white'}}>
                                Already a member? <a style={{color: 'white'}} onClick={() => navigate('/login')}>Click here</a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <img alt="" src={SignupImg} style={{height: '80vh'}}/>
                </Col>
            </Row>
        </div>
    );
}

export default Signup;