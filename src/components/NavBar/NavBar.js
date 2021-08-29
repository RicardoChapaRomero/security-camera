import React, { Component } from 'react';
import { Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <Row style={{ margin: 0}}>
                <Navbar className='page-navbar' expand='lg'>
                        <Navbar.Brand as={ Link } to='/'>SafeCam</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={ Link } to='/'>Home</Nav.Link>
                                <Nav.Link as={ Link } to='/Cameras'>Cameras</Nav.Link>
                                <Nav.Link as={ Link } to='/Dashboard'>Dashboard</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Row>
        );
    }
}
export default NavBar;
