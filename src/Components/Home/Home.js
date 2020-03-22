import React, { Component } from "react";
import fire from "../../config/fireKey";


class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.user) {
      const userT = this.props.newUser.map((newUs,index)=>{
        return (
          
            <h1 key={index} className="ml-1">{newUs.userType}</h1>
          
        )
      })
      return (
        <div className="mt-3 bg-light vh-100 container rounded">
          <h1 className="p-5 text-center">Welcome - {this.props.user.email}</h1>
          <div className="text-center">
          {userT}
        </div>
        </div>
        
      );
    } else {
      return (
        <div className="mt-3 bg-light vh-100 container rounded">
          <h1 className="p-5 text-center">Home Page! Welcome</h1>
        </div>
      );
    }
  }
}


export default Home;
