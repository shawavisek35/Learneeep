import React , { Component } from "react"
import {Route , Link , BowserRouter} from "react-router-dom"
import fire from "../../config/fireKey";
import { Button } from "reactstrap";


class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email : "",
            password : ""
        }
    }
    login(val){
        val.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((e)=>{
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
                <h1 className="p-5 text-center">Login</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <button onClick={this.login} className="btn btn-success">Login</button>
                </form>
            </div>
        )
    }

}

export default Login