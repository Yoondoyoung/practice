import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 // eslint-disable-next-line
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <Navbar className="nav-head my-4" expand="md" bg="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="nav-center" activeKey="/home">
                        <Nav.Item>
                          <Link to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/Profile">Profile</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/Project">Project</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/Contact">Contact</Link>
                        </Nav.Item>
                    </Nav>
            </Navbar>
        );
    }
}

export default NavBar;