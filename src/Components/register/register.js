import React , { Component } from "react"
import {Route , Link , BowserRouter} from "react-router-dom"
import fire from "../../config/fireKey";

class Register extends Component{
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email : "",
            password : "",
            f_name : "",
            l_name : "",
            user_type : "",
            gender : "",
            mobile : "",
            address : "",
        }
    }
    signup(val){
        val.preventDefault();
        const { history } = this.props;
        fire.auth().createUserWithEmailAndPassword(this.state.email , this.state.password).then((e)=>{
            console.log(e);
            history.push('/')
        })
        .catch((err)=>{
            console.log(err);
        });

        fire.firestore().collection("users").add({
            firstName : this.state.f_name,
            lastName : this.state.l_name,
            email : this.state.email,
            phone : this.state.mobile,
            userType : this.state.user_type,
            address : this.state.address,
            gender : this.state.gender
        })
        .then((doc) => {
            console.log("user added with doc id as : ",doc.id);
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
                <form className="d-flex justify-content-center mx-auto flex-column w-50">
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="f_name" id="f_name" placeholder="Enter your First Name" onChange={this.handleChange} value={this.state.f_name} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="l_name" id="l_name" placeholder="Enter your last name" onChange={this.handleChange} value={this.state.l_name} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="number" name="mobile" id="mobile" placeholder="Enter your Mobile Number" onChange={this.handleChange} value={this.state.mobile} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="address" id="address" placeholder="Enter your Address" onChange={this.handleChange} value={this.state.address} />
                    </div>
                    <div className="form-group">
                    <select class="form-control " name="user_type" id="userType" onChange={this.handleChange} value={this.state.user_type}>    
                        <option>Enter your User Type</option>
                        <option value="Student">Student </option>
                        <option value="Mentor">Mentor</option>
                        <option value="Moderator">Moderator</option>

                    </select>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="gender" id="gender" placeholder="Enter your Gender" onChange={this.handleChange} value={this.state.gender} />
                    </div>
                    <button onClick={this.signup} className="btn btn-success">Signup</button>
                </form>
            </div>
        )
    }

}

export default Register