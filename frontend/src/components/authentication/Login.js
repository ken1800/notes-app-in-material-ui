import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import FormField from "./FormField";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/AuthActions";
import PropsType from "prop-types";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state);
  };
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          this.props.history.goBack()
        ) : (
          <div style={{ width: "80%", margin: "30px auto" }}>
            <form
              onSubmit={this.handleSubmit}
              autoComplete="on"
              style={{
                width: "90%",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <FormField
                type="email"
                name="email"
                label="E-mail"
                value={this.state.email}
                handleChange={this.handleChange}
              />
              <br />
              <FormField
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                handleChange={this.handleChange}
              />
              <br />
              <div style={{ display: "block", width: "100%", clear: "both" }}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "teal",
                    color: "#fff",
                    float: "left"
                  }}
                >
                  Login
                </Button>
                <Link
                  to="/forgot-password"
                  style={{
                    float: "right",
                    marginTop: "8px",
                    textDecoration: "none",
                    color: "teal"
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              <br />
              <br />
              <p style={{ color: "rgb(60,60,60)" }}>
                Didn't have an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "teal"
                  }}
                >
                  Sign up
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

Login.propTypes = {
  loginUser: PropsType.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  errorMsg: state.auth.errorMsg
});

export default connect(mapStateToProps, { loginUser })(Login);
