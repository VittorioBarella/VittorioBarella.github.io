import React from 'react';
import '../Header/style.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='navBar' expand='lg'>
      <Navbar.Brand class='brand'>Vittório de Andrade</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto navBarLinks'>
          <ul className='navbar-nav '>
            <Link to='/'>
              <li className='nav-item '>
                <a className=''>Home</a>
              </li>
            </Link>
            <Link to='/sobre'>
              <li className='nav-item'>
                <a className=''>About</a>
              </li>
            </Link>
            <Link to='/contato'>
              <li className='nav-item'>
                <a className=''>Contact</a>
              </li>
            </Link>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
