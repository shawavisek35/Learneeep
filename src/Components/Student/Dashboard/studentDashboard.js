import React, { Component } from 'react';

class StudentDashboard extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render() { 
        
        console.log("name : ",this.props.name);
        return(
            <div className="container">
                {this.props.name}
            </div>
        )
    }
}
 
export default StudentDashboard;