import React from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function ProductDetails() {

    const location = useLocation();
    const {title, price, images, description} = location.state;


    return(
        <div style={{padding: 70}}>
           <Row>
            <Col lg={2}>
                <div>
                    {images.map(image => {
                        return(
                            <img src={image} width={150} style={{marginBottom: 20, borderRadius: 8}}/>
                        )
                    })}
                </div>
            </Col>
            <Col lg={5}>
                <div>
                    <img  src={images[0]} width= {350} style={{marginBottom: 20, borderRadius: 8}}/>
                    <h4>{title}</h4>
                    <div style={{color: '#216ad9'}}>{price}</div>
                    <div>{description}</div>
                    <Button style={{marginTop: 30}}>Add to cart</Button>
                </div>
            </Col>
            <Col lg={5}>
                <div>Other similar products</div>
            </Col>
           </Row>
        </div>
    );
}

export default ProductDetails;