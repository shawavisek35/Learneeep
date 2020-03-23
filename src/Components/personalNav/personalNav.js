import React , { Component } from "react";
import "./personalNav.css";
import "./personalNavIndex";

class PersonalNav extends Component {
    constructor(props) {
        super(props);
    }

    openNav() {
        var n = document.getElementById("mySidenav");
        if(n.style.width == "250px"){
            n.style.width = "0";
        }
        else{
            n.style.width = "250px";
        }
        var m = document.getElementById("main");
        if(m.style.marginLeft == "250px"){
            m.style.marginLeft = "0";
            var b = document.getElementById("butt");
            
            b.innerText = "Open";
        }
        else{
            m.style.marginLeft = "250px";
            var b = document.getElementById("butt");
            
            b.innerText = "Close";
            
            
        }
       
      }

    render() {
        if(this.props.userType=="student"){
            return (
                <div>
                <div id="mySidenav" className="sidenav">
                    
                    <a href="#">Give Exam</a>
                    <a href="#">Check Marks</a>
                    <a href="#">Enroll</a>
                    <a href="#">Contact</a>
                </div>

                <div id="main">
                    <button id="butt" class="btn btn-primary" onClick={this.openNav}>Open</button>
                </div>
                </div>
            )
        }
        else if(this.props.userType=="teacher"){
            return (
                <div>
                <div id="mySidenav" className="sidenav">
                    
                    <a href="#">Set Question Paper</a>
                    <a href="#">Set Exam</a>
                    <a href="#">Check Papers</a>
                    <a href="#">Contact</a>
                </div>

                <div id="main">
                    <button id="butt" class="btn btn-primary" onClick={this.openNav}>Open</button>
                </div>
                </div>
            )
        }
        else{
            return (
                <div>
                <div id="mySidenav" className="sidenav">
                    
                    <a href="#">Verify Teachers</a>
                    <a href="#">Verify Students</a>
                    
                </div>

                <div id="main">
                    <button class="btn btn-primary" onClick={this.openNav}>Open</button>
                </div>
                </div>
            )
        }
    }
}

export default PersonalNav;