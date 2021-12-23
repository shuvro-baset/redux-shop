import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <Container>
            {/* <h2>Home</h2> */}
            <Products></Products>
        </Container>
    );
};

export default Home;