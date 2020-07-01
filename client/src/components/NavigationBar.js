import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

export class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
                <Navbar.Brand href="#home" onClick={() => this.props.changePage('home')}>Merchant Queue Times</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about" onClick={() => this.props.changePage('about')}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;