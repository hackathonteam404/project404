import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
            <Navbar.Brand href="#home">Project 404</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#p1">Page 1</Nav.Link>
                <Nav.Link href="#p2">Page 2</Nav.Link>
                <Nav.Link href="#p3">Page 3</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="primary">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;