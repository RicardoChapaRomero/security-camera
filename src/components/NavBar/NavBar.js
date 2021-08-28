import React, { Component } from 'react';
import { Nav, Navbar, Row } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return(
            <Row>
                <Navbar bg='primary' variant='dark' fixed='top' className='page-navbar' expand='lg'>
                        <Navbar.Brand href="#home">SafeCam</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#MyCameras">Cameras</Nav.Link>
                                <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Row>
        );
    }
}
export default NavBar;
