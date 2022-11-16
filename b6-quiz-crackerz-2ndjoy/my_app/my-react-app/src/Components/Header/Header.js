import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (



        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='text-primary fs-2 fw-bold titlee'><Link className='text-decoration-none' to={'/'}> Questions and Quiz</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='header-container'>
                    <Nav className="me-auto header">

                        <Link to='/'>Topic</Link>
                        <Link to='statistics'>Statistics</Link>
                        <Link to='blogs'>Blogs</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};



export default Header;

