import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from "reactstrap";
import "./style.css"
import {GiHamburgerMenu} from "react-icons/gi"

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" >
        <NavbarBrand className="nav-brand-name"  href="/">Multiverse</NavbarBrand>
        <GiHamburgerMenu size={25} className="ham" onClick={toggle}/>
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="text-center"  navbar>
            <NavItem>
              <NavLink href="/components/">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Romeo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
