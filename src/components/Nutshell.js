import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import UsersManager from "../modules/UsersManager";
import "./Nutshell.css";

class Nutshell extends Component {
  state ={
    user: false,
    users: []
}

// Check Local Storage for matching Credentials
// returns boolean value
// moving Authentication to Nutshell.js from App.View
isSignedup = () => localStorage.getItem("credentials") !== null

setUser = (signupObj) => {
  // Set Store Email and password in local storage
  localStorage.setItem(
    "credentials",
    JSON.stringify(signupObj)
  )
  this.setState({
    user: this.isSignedup()
  });
}

componentDidMount(){
  this.setState({
    user: this.isSignedup()
  });
  localStorage.setItem("activeUser", 1)
  UsersManager.getAllUsers()
    .then(users => this.setState({users: users}))
}


render() {
    return (
      <React.Fragment>
        <NavBar 
        user={this.state.user} 
        />
        <ApplicationViews 
        user={this.state.user}
                          setUser={this.setUser} 
                          />
      </React.Fragment>
    );
  }
}

export default Nutshell;
