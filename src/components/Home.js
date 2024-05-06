import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselImgOne from '../assets/1.png';
import CarouselImgTwo from '../assets/4.png';
import CarouselImgThree from '../assets/5.png';
import Button from 'react-bootstrap/Button'


function Home() {

    return(
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 100}}>
                                <h3>SHOP WITH ME</h3>
                                <h3>STYLE</h3>
                                <h5>Shop with latest trendy products</h5>
                                <div>
                                    <Button>Browse Products</Button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img alt="" src={CarouselImgOne} width="" height=""/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            TExt Data
                        </Col>
                        <Col>
                            <img alt="" src={CarouselImgTwo} width="" height=""/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            TExt Data
                        </Col>
                        <Col>
                            <img alt="" src={CarouselImgThree} width="" height=""/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;    