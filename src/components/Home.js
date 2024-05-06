import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselImgOne from '../assets/1.png';
import CarouselImgTwo from '../assets/4.png';
import CarouselImgThree from '../assets/5.png';
import Button from 'react-bootstrap/Button';
import CompanyOneImage from '../assets/10.png';
import CompanyTwoImage from '../assets/11.png';
import CompanyThreeImage from '../assets/12.png';
import CompanyFourImage from '../assets/13.png';
import CompanyFiveImage from '../assets/14.png';
import CompanySixImage from '../assets/15.png';



function Home() {
    return(
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 200}}>
                                <h1 style={{fontWeight: 700}}><i>SHOP WITH ME</i></h1>
                                <h1 style={{color: '#216ad9', fontWeight: 700}}> <i>STYLE</i></h1>
                                <h3 style={{marginBottom: '20px'}}>Shop with latest trendy products</h3>
                                <div style={{marginBottom: '20px'}}>
                                    <Button style={{width: '250px'}}>Browse Products</Button>
                                </div>
                                <div>
                                    <h4>Products available from:</h4>
                                    <img alt="" src={CompanyOneImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyTwoImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyThreeImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyFourImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyFiveImage} style={{height: 50}}/>
                                    <img alt="" src={CompanySixImage} style={{height: 50}}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img alt="" src={CarouselImgOne} style={{height: '80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 200}}>
                                <h1 style={{fontWeight: 700}}><i>SHOP WITH ME</i></h1>
                                <h1 style={{color: '#216ad9', fontWeight: 700}}> <i>STYLE</i></h1>
                                <h3 style={{marginBottom: '20px'}}>Shop with latest trendy products</h3>
                                <div style={{marginBottom: '20px'}}>
                                    <Button style={{width: '250px'}}>Browse Products</Button>
                                </div>
                                <div>
                                    <h4>Products available from:</h4>
                                    <img alt="" src={CompanyOneImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyTwoImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyThreeImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyFourImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyFiveImage} style={{height: 50}}/>
                                    <img alt="" src={CompanySixImage} style={{height: 50}}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img alt="" src={CarouselImgTwo} style={{height: '80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 200}}>
                                <h1 style={{fontWeight: 700}}><i>SHOP WITH ME</i></h1>
                                <h1 style={{color: '#216ad9', fontWeight: 700}}> <i>STYLE</i></h1>
                                <h3 style={{marginBottom: '20px'}}>Shop with latest trendy products</h3>
                                <div style={{marginBottom: '20px'}}>
                                    <Button style={{width: '250px'}}>Browse Products</Button>
                                </div>
                                <div>
                                    <h4>Products available from:</h4>
                                    <img alt="" src={CompanyOneImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyTwoImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyThreeImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyFourImage} style={{height: 50}}/>
                                    <img alt="" src={CompanyFiveImage} style={{height: 50}}/>
                                    <img alt="" src={CompanySixImage} style={{height: 50}}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img alt="" src={CarouselImgThree} style={{height: '80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;    