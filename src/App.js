import React , {Component} from "react";
import "./App.css";
import "./bootstrap.css";
import NavBar from "./Components/Nav/Nav";
import fire from "./config/fireKey";
import Home from "./Components/Home/Home"
import Login from "./Components/login/login"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user : {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          user
        })
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }

  render(){
    
      return(
        <div className="App">
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
          <NavBar />
          
          
      </div>
      )
    
    
  }
}

export default App;
