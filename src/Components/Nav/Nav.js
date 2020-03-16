import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
let Nav = props => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            LearnabytE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarNavAltMarkup"
          >
            <div className="ml-auto navbar-nav text-center">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link active" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link active" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
};

export default Nav;
