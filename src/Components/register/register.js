import React , { Component } from "react"
import {Route , Link , BowserRouter} from "react-router-dom"
import fire from "../../config/fireKey";

class Register extends Component{
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {

        }
    }
    signup(val){
        val.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email , this.state.password).then((e)=>{
            console.log(e);
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="mt-3 bg-light vh-100 container rounded">
                <h1 className="p-5 text-center">Register</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <button onClick={this.signup} className="btn btn-success">Signup</button>
                </form>
            </div>
        )
    }

}

export default Register