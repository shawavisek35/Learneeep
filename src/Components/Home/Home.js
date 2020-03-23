import React, { Component } from "react";
import fire from "../../config/fireKey";
import PersonalNav from "../personalNav/personalNav";


class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.user) {
    
        return (
          <div className="mt-3 bg-light vh-100 container rounded">
            <h1 className="p-5 text-center">Welcome - {this.props.user.email}</h1>
            <div className="text-center">
              <h1>{this.props.userType}</h1>
              
            </div>
          </div>
          
        );
    } 
    else {
      return (
        <div className="mt-3 bg-light vh-100 container rounded">
          <h1 className="p-5 text-center">Home Page! Welcome</h1>
        </div>
      );
    }
  }
}


export default Home;
