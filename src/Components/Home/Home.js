import React, { Component } from "react";
import fire from "../../config/fireKey";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user) {
      return (
        <div className="mt-3 bg-light vh-100 container rounded">
          <h1 className="p-5 text-center">Welcome - {this.props.user.email}</h1>
      
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
// let Home = () => {
//   return (
//     <div className="mt-3 bg-light vh-100 container rounded">
//       <h1 className="p-5 text-center">Home Page</h1>
//     </div>
//   );
// };

export default Home;
