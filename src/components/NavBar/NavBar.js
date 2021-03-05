import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 // eslint-disable-next-line
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <Navbar className="nav-head my-4" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="nav-center" activeKey="/home">
                          <Link className='menu-list' to="/">Home</Link>
                          <Link className='menu-list' to="/Skills">Skills</Link>
                          <Link className='menu-list' to="/Project">Project</Link>
                          <Link className='menu-list' to="/Contact">Contact</Link>
                    </Nav>
            </Navbar>
        );
    }
}

export default NavBar;