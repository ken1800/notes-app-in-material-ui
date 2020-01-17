import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import TitleIcon from "@material-ui/icons/Title";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Preview from "./Preview";
import { createNotes } from "../../redux/actions/NotesActions";
import PropsTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";

const styles = {
  root: {
    "& label.Mui-focused": {
      color: "teal"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "teal"
      }
    },
    "& input:valid:focus + fieldset": {
      borderColor: "teal",
      padding: "4px !important"
    }
  }
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class AddNotes extends Component {
  state = {
    title: "",
    body: "",
    checked: true,
    open: true
  };
  handelChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const content = {
      title: this.state.title,
      body: this.state.body,
      public: this.state.checked
    };
    this.props.createNotes(content);
    this.setState({
      title: "",
      body: ""
    });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      open: false
    });
  };
  render() {
    const actionClasses = this.props.classes;
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div
            style={{
              width: "90%",
              margin: "20px auto"
            }}
          >
            {this.props.isNoteAdded === 2 && (
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                key={`${"top"},${"center"}`}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="success">
                  Note added!
                </Alert>
              </Snackbar>
            )}
            {this.props.isNoteAdded === 3 && (
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                key={`${"top"},${"center"}`}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="error">
                  Sorry! But something went wrong, we can't add your note right
                  now, Please try again later
                </Alert>
              </Snackbar>
            )}
            <form
              style={{ width: "100%" }}
              autoComplete="on"
              onSubmit={this.handleSubmit}
            >
              <TextField
                id="outlined-basic"
                name="title"
                value={this.state.title}
                onChange={this.handelChange}
                label="Note Title"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TitleIcon />
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                style={{ width: "100%" }}
                classes={actionClasses}
                placeholder="My note on something"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                multiline={true}
                name="body"
                label="Note Body"
                value={this.state.body}
                onChange={this.handelChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      style={{ marginTop: "-16.5em", marginRight: "5px" }}
                    >
                      <TextFieldsIcon />
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                style={{ width: "100%" }}
                classes={actionClasses}
                rows={15}
                placeholder="Description of my note"
              />
              <br />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checked"
                    color="primary"
                    onChange={this.handelChange}
                    checked={this.state.checked}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Make Public"
              />
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "nowrap",
                  flexDirection: "row"
                }}
              >
                <Preview />
                {console.log(this.props.isNoteAdded)}
                {this.props.isNoteAdded === 1 ? (
                  <Button variant="contained" disabled>
                    Creating...
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "teal", color: "#fff" }}
                  >
                    Save
                  </Button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              marginTop: "10em",
              fontWeight: "400"
            }}
          >
            You are not logged In,{" "}
            <Link to="/login" style={{ textDecoration: "none", color: "teal" }}>
              Login
            </Link>{" "}
            here
          </p>
        )}
      </div>
    );
  }
}

AddNotes.propTypes = {
  createNotes: PropsTypes.func.isRequired,
  isLoading: PropsTypes.bool,
  error: PropsTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.notes.isLoading,
  error: state.notes.error,
  errorMsg: state.notes.errorMsg,
  isNoteAdded: state.notes.isNoteAdded
});

export default connect(mapStateToProps, { createNotes })(
  withStyles(styles)(AddNotes)
);
