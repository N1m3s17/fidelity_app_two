import React from 'react';
import { Nav, NavLink, NavbarBrand } from 'reactstrap';
import fidelity_logo from '../fidelity_logo.jpg';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div>
      <Nav>
        <NavbarBrand>
            <img className="fid_logo" src={fidelity_logo} alt="logo" />
        </NavbarBrand>
        <NavLink href="#">Price & Performance</NavLink> 
        <NavLink href="#">Mutual Funds</NavLink> 
        <NavLink href="#">ETFs</NavLink>
        <NavLink href="#">Investor Education</NavLink>
        <NavLink href="#">Expert Insights</NavLink> 
      </Nav>
    </div>
  );
}

export default Navbar;