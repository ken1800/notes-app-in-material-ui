import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import FormField from "./FormField";
import { Link, Redirect } from "react-router-dom";
import { createUser } from "../../redux/actions/AccountCreationActions";
import PropsType from "prop-types";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    username: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const {
      email,
      password1,
      password2,
      username,
      firstName,
      lastName
    } = this.state;
    if (
      email === "" ||
      password1 === "" ||
      password2 === "" ||
      username === "" ||
      firstName === "" ||
      lastName === ""
    )
      return;
    this.props.createUser(this.state);
  };
  render() {
    if (typeof this.props.isAccountCreated === "boolean") {
      window.location.replace("http://localhost:3000/");
    }
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <div style={{ width: "80%", margin: "30px auto" }}>
            <form
              onSubmit={this.handleSubmit}
              autoComplete="on"
              style={{
                width: "90%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <FormField
                type="text"
                name="firstName"
                label="First Name"
                value={this.state.firstName}
                handleChange={this.handleChange}
              />
              <br />
              <FormField
                type="text"
                name="lastName"
                label="Last Name"
                value={this.state.lastName}
                handleChange={this.handleChange}
              />
              <br />
              <FormField
                type="email"
                name="email"
                label="E-mail"
                value={this.state.email}
                handleChange={this.handleChange}
              />
              <br />
              <FormField
                type="text"
                name="username"
                label="Username"
                value={this.state.username}
                handleChange={this.handleChange}
              />
              <br />
              <FormField
                type="password"
                name="password1"
                label="Password"
                value={this.state.password1}
                handleChange={this.handleChange}
              />
              <br />
              <FormField
                type="password"
                name="password2"
                label="Confirm Password"
                value={this.state.password2}
                handleChange={this.handleChange}
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "teal",
                  color: "#fff",
                  float: "left"
                }}
              >
                Create account
              </Button>
              <br />
              <br />
              <p style={{ color: "rgb(60,60,60)" }}>
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "teal"
                  }}
                >
                  Login here
                </Link>{" "}
                here
              </p>
            </form>
          </div>
        )}
      </div>
    );
  }
}

Signup.propTypes = {
  createUser: PropsType.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.signUp.isLoading,
  errors: state.signUp.errors,
  isAccountCreated: state.signUp.isAccountCreated
});

export default connect(mapStateToProps, { createUser })(Signup);
