import React from 'react';
import { Navbar, Nav, NavLink, NavbarBrand } from 'reactstrap';
import fidelity_logo from '../fid_logo.png';
import './Navbar.css'

const Navibar = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
            <img className="fid_logo" src={fidelity_logo} alt="logo" />
        </NavbarBrand>
        <Nav>
        <NavLink color="secondary" href="#">Price & Performance</NavLink> 
        <NavLink href="#">Mutual Funds</NavLink> 
        <NavLink href="#">ETFs</NavLink>
        <NavLink href="#">Investor Education</NavLink>
        <NavLink href="#">Expert Insights</NavLink> 
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navibar;