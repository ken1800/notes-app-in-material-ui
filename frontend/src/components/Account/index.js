import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Settings from "./Settings";

const wrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItem: "center"
};

const profileImg = {
  width: "100px",
  height: "100px",
  border: "1px solid #fafafa",
  borderRadius: "50%",
  objectFit: "contain"
};

class Account extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <Card
          style={{
            width: "98%",
            margin: "auto",
            border: "1px double #e2e2e2",
            boxShadow: "none"
          }}
        >
          <CardContent>
            <Typography style={wrapper} gutterBottom>
              <img
                src="https://lh3.googleusercontent.com/a-/AAuE7mAkbRxo7SO7TFJzjtNFFi6z5aKG4cSRAT6O83-Elg=s96-cc-rg"
                alt={"onlinenotes profile"}
                style={profileImg}
              />
            </Typography>
            <Typography>
              <span
                style={{
                  display: "block",
                  textAlign: "center",
                  marginBottom: "0",
                  paddingBottom: "0",
                  color: "slategray",
                  fontWeight: "500"
                }}
              >
                Ankit Brijwasi
              </span>
              <span
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "0",
                  color: "#7b7aa5"
                }}
              >
                abrijwasi1@gmail.com
              </span>
            </Typography>
          </CardContent>
          <CardActions>
            <Settings />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Account;
