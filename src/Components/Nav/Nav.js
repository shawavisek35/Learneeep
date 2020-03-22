import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import App from '../../App';
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../login/login";
import Register from "../register/register";
import fire from "../../config/fireKey";
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
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      user: {},
      authed: false,
      newUser : []
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          authed: true
        });
      } else {
        this.setState({
          user: null,
          authed : false
        });
      }
    });

    fire.firestore().collection("users").get()
    .then((docs)=>{
      const newUser = []
      docs.forEach((doc)=>{
        const data = doc.data()
        newUser.push(data)
      })
      var x;
      var newU = [];
      for(x of newUser) {
        // console.log(1)
        // console.log("x",x.email);
        // console.log("this",this.state.user.email)
        if(x.email == this.state.user.email){
          console.log(1)
          newU.push(x);
          break;
        }
      }
      //console.log("userrrrrr",newU);
      this.setState({
        newUser : newU
      })
    })

    .catch((err)=>{
      console.log(err);
    });

    
   
  }

  logout() {
    fire.auth().signOut();
    return (
      <Redirect to="/"/>
    );
  }

  toggle() {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }
  render() {
    if (this.state.authed) {
      //console.log(this.state.user);
      //console.log("newUser",this.state.newUser[0]);
      
      return (
        <BrowserRouter>
          <div>
            <Navbar color="light" light expand="md">
              <Link className="navbar-brand" to="/">
                LearNeeP
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <Link className="nav-item nav-link active" to="/">
                    Home
                  </Link>
                  <Link className="nave-item nav-link active" to="/about">
                    About
                  </Link>
                  <Link className="nav-item nav-link active" to="/Contact">
                    Contact
                  </Link>
                  <Link
                    className="nav-item nav-link active"
                    to="/"
                    onClick={this.logout}
                  >
                    Logout
                  </Link>
                </Nav>
              </Collapse>
            </Navbar>
            <Route
              exact
              path="/"
              render={props => <Home {...props} user={this.state.user} newUser={this.state.newUser} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      );
    }
    else {
      return (
        <BrowserRouter>
          <div>
            <Navbar color="light" light expand="md">
              <Link className="navbar-brand" to="/">
                LearNeeP
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <Link className="nav-item nav-link active" to="/">
                    Home
                  </Link>
                  <Link className="nave-item nav-link active" to="/about">
                    About
                  </Link>
                  <Link className="nav-item nav-link active" to="/Contact">
                    Contact
                  </Link>

                  <Link className="nav-item nav-link active" to="/register">
                    Register
                  </Link>
                  <Link className="nav-item nav-link active" to="/login">
                    Login
                  </Link>
                </Nav>
              </Collapse>
            </Navbar>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
      );
    }
  }
}


export default NavBar;
