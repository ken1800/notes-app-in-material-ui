import React, { Component } from "react";
import { connect } from "react-redux";
import NotesCard from "./NotesCard";
import PropsTypes from "prop-types";
import { fetchNotes } from "../../redux/actions/NotesActions";
import CircularProgress from "@material-ui/core/CircularProgress";

class Home extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div>
        {console.log(`Homepage: ${this.props.isAuthenticated}`)}
        {this.props.isLoading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            {this.props.error ? (
              <p>{this.props.errorMsg}</p>
            ) : (
              <div>
                <CircularProgress
                  color="inherit"
                  style={{ marginLeft: "4em" }}
                />
                <p>Hang on fetching notes...</p>
              </div>
            )}
          </div>
        ) : (
          this.props.notes.map(note => <NotesCard key={note.id} {...note} />)
        )}
        <br />
        <br />
        <br />
      </div>
    );
  }
}

Home.propTypes = {
  fetchNotes: PropsTypes.func.isRequired,
  notes: PropsTypes.array
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  notes: state.notes.fetchedNotes,
  isLoading: state.notes.isLoading,
  error: state.notes.error,
  errorMsg: state.notes.errorMsg
});

export default connect(mapStateToProps, { fetchNotes })(Home);
