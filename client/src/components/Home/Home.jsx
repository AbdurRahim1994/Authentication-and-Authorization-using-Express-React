import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <Navbar bg='light' expand='lg' variant='light'>
            <Container className='p-2' fluid={true}>
                <Navbar.Brand href="#home" className='font-weight-bolder'>User Authentication</Navbar.Brand>
                <NavLink to='/Login' className='btn btn-warning mb-0 mx-10 font-weight-bolder'>Login</NavLink>
            </Container>
        </Navbar>

    );
};

export default Home;