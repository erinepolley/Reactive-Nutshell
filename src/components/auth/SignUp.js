import React, { Component } from "react";


class SignUp extends Component {
    // Setting State to empty strings
    state = {
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    // Update State as the Registration Input Field is Utilized
    signUpFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // Sign Up function and stop of click before ready
    handleSignUpSubmit = (event) => {
        event.preventDefault()
        if ( this.state.password === this.state.confirmPassword ) {
        // Storing The email and password and Username in local storage for customer.
    // localStorage.setItem(
    //     "credentials",
    //     JSON.stringify({
    //         email: this.state.email,
    //         username: this.state.username,
    //         password: this.state.password
    //     })
    // )
    this.props.setUser({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
    })
    this.props.history.push("/users");
    } else {
        window.alert("Why you suck, fields not match! Retry Password?");
    }
    }
    render() {
        return (
         <>
            <form onSubmit={this.handleSignUpSubmit}>
            <fieldset>
            <div className="formgrid">
                <label htmlFor="inputEmail">Email Address</label>
            <input onChange={this.signUpFieldChange} type="email"
                    id="email"
                    placeholder="Email Address"
                    required="" autoFocus="" />
                    
                <label htmlFor="inputUsername">Username</label>
            <input onChange={this.signUpFieldChange} 
            type="username"
                    id="username"
                    placeholder="Username"
                    required="" autoFocus="" />
                    
                <label htmlFor="inputPassword">Password</label>
            <input onChange={this.signUpFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" autoFocus="" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onChange={this.signUpFieldChange} type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required autoFocus="" />
                </div>
                <button id="register-button" className="button" type="submit">Submit</button>
            </fieldset>
        </form>
        </>
            
     )
    }
}


export default SignUp;