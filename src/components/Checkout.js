import React from 'react';
import CheckoutImage from '../assets/16.png';

function Checkout() {

    return(
        <div style={{display: 'flex', justifyContent: 'center', margin: 70}}>
            <img src={CheckoutImage} height={500}/>
        </div>
    )
}

export default Checkout;