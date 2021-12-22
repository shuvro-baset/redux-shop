import React from 'react';
import { Col } from 'react-bootstrap';

const Product = () => {
    return (
        <Col md={4}>
            <div>
                <img src="" alt="" />
                <h2>Title</h2>
                <p>Description</p>
                <h6>Price</h6>
                <button>details</button>
            </div>
        </Col>
    );
};

export default Product;