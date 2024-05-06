import React, { useEffect}  from "react";
import axios from 'axios'


function ProductGallery() {


    useEffect(() => {
        async function getProducts() {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            console.log(response.data);
        }
        getProducts();
    }, []);

    return(
        <div>

        </div>
    )
}

export default ProductGallery;