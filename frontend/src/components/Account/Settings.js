import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Settings extends Component {
  render() {
    return (
      <div style={{ display: "block", width: "100%" }}>
        <div style={{ clear: "both", margin: "10px" }}>
          <div
            style={{
              float: "left",
              width: "50%",
              paddingTop: "8px"
            }}
          >
            Name
          </div>
          <div style={{ float: "right", width: "50%" }}>
            <TextField
              placeholder={"Ankit Brijwasi"}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div style={{ margin: "10px", clear: "both", paddingTop: "10px" }}>
          <div
            style={{
              float: "left",
              width: "50%",
              paddingTop: "8px"
            }}
          >
            Email
          </div>
          <div style={{ float: "right", width: "50%" }}>
            <TextField
              placeholder={"abrijwasi1@gmail.com"}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div style={{ margin: "10px", clear: "both", paddingTop: "10px" }}>
          <div
            style={{
              float: "left",
              width: "50%",
              paddingTop: "8px"
            }}
          >
            Username
          </div>
          <div style={{ float: "right", width: "50%" }}>
            <TextField placeholder={"AnkitB4"} style={{ width: "100%" }} />
          </div>
        </div>
        <div style={{ margin: "10px", clear: "both", paddingTop: "10px" }}>
          <div
            style={{
              float: "left",
              width: "50%",
              paddingTop: "8px"
            }}
          >
            Password
          </div>
          <div style={{ float: "right", width: "50%" }}>
            <TextField placeholder={"**********"} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
