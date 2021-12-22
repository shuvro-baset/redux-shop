import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
            <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="menu-item" to="/home">Home</Link>
                    <Link className="menu-item" to="/shop">shop</Link>
                    <Link className="menu-item" to="/about">About</Link>
                    <Link className="menu-item" to="/cart"><i className="fa fa-shopping-cart"></i></Link>
                </Nav>                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;