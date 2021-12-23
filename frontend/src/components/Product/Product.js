import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Product = ({ imageUrl, description, price, name, productId }) => {
    return (
        <Col md={4}>
            <div>
                <img className="img-fluid" src={imageUrl} alt={name} />

                <div >
                    <p className="">{name}</p>

                    <p className="">{description.substring(0, 100)}...</p>

                    <p className="">${price}</p>

                    <Link to={`/product/${productId}`} className="">
                        View
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Product;