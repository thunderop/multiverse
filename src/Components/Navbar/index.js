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
import { useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation-bar" expand="md" color="light">
        <NavbarBrand
          className="nav-brand-name d-flex align-items-center"
          onClick={()=>navigate("/")}
        >
          <img
            alt="logo"
            className="me-2"
            src={assets.multiverseLogo}
            style={{
              height: 30,
              width: 30,
            }}
          />
          Multiverse
        </NavbarBrand>
        <GiHamburgerMenu size={25} className="ham" onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="text-center" navbar>
            <NavItem>
              <NavLink className="nav-items" >
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-items"
                onClick={() => navigate("/movies")}
              >
                Movies
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
