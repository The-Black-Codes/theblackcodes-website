import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../App.scss';
import logo from './public/assets/images/BlackCodes.png';
import routes from '../routes';

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation" dark expand="md">
        <NavbarBrand href="/"><img src={logo} alt="Black Codes Logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} right />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              routes.map((route, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink href={route.path}>{route.name}</NavLink>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;