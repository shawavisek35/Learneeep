import React, { useState , Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
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
} from "reactstrap"

class NavBar extends Component{
  constructor(props){
    
    super(props);

    this.logout = this.logout.bind(this);
    this.state = {
      user : {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          user
        })
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }

  logout(){
    fire.auth().signOut();
  }
  

  toggle(){
    const [isOpen , setIsOpen] = useState(false);
    setIsOpen(!isOpen);
  }
  render(){

    if(this.state.user){
      return(
      
        <BrowserRouter>
          <div>
          <Navbar color="light" light expand="md">
            <Link className="navbar-brand" to="/">LearNeeP</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <Link className="nav-item nav-link active" to="/">Home</Link>
                  <Link className="nave-item nav-link active" to="/about">About</Link>
                  <Link className="nav-item nav-link active" to="/Contact">Contact</Link>
                  <Link className="nav-item nav-link active" to="/" onClick = {this.logout}>Logout</Link>
                  
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          
        </div>
        </BrowserRouter>
      )
    }
    else{
      return(
      
        <BrowserRouter>
          <div>
          <Navbar color="light" light expand="md">
            <Link className="navbar-brand" to="/">LearNeeP</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <Link className="nav-item nav-link active" to="/">Home</Link>
                  <Link className="nave-item nav-link active" to="/about">About</Link>
                  <Link className="nav-item nav-link active" to="/Contact">Contact</Link>
                  
                  <Link className="nav-item nav-link active" to="/register">Register</Link>
                  <Link className="nav-item nav-link active" to="/login">Login</Link>
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
      )
    }
    
    
  }
}

// let NavBar = (props) => {
  
//   return (
  
    
//   );
// };

export default NavBar;
