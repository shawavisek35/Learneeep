import React, { useState } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import {
  Collapse,
  NavbarToggler,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap"


let NavBar = (props) => {
  const [isOpen , setIsOpen] = useState(false);

  const toggle = () =>setIsOpen(!isOpen);
  return (
  <BrowserRouter>
    <div>
    <Navbar color="light" light expand="md">
      <Link className="navbar-brand" to="/">LearNeeP</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nave-item nav-link active" to="/about">About</Link>
            <Link className="nav-item nav-link active" to="/Contact">Contact</Link>
        </Nav>
      </Collapse>
    </Navbar>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
  </BrowserRouter>
    
  );
};

export default NavBar;
