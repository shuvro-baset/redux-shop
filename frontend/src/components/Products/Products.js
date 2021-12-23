import React from 'react';
import  { Container, Row } from 'react-bootstrap'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
import Product from '../Product/Product';


const Products = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    
    return (
        <Container fluid>
            <Row>
            {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
            </Row>
        </Container>
    );
};

export default Products;