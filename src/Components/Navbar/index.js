import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./style.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { assets } from "../../assets/assets";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation-bar" expand="md" color="light" >
        <NavbarBrand className="nav-brand-name d-flex align-items-center" href="/">
        <img
        alt="logo"
        className="me-2"
        src={assets.multiverseLogo}
        style={{
          height: 30,
          width: 30
        }}
      />
          Multiverse
        </NavbarBrand>
        <GiHamburgerMenu size={25} className="ham" onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="text-center" navbar>
            <NavItem>
              <NavLink className="nav-items" href="/components/">
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-items"
                href="https://github.com/reactstrap/reactstrap"
              >
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
