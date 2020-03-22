import React, { Component } from "react";
import fire from "../../config/fireKey";

const Home = props => {
  if (props.user) {
    return (
      <div className="d-flex flex-column justify-content-start mt-3 p-5 bg-light vh-100 container rounded">
        <h1 className="text-center">Dashboard</h1>
        <h4 className="text-center">User - {props.user.email}</h4>
      </div>
    );
  } else {
    return (
      <div className="mt-3 bg-light vh-100 container rounded">
        <h1 className="p-5 text-center">Home Page</h1>
      </div>
    );
  }
};


// let Home = () => {
//   return (
//     <div className="mt-3 bg-light vh-100 container rounded">
//       <h1 className="p-5 text-center">Home Page</h1>
//     </div>
//   );
// };

export default Home;
