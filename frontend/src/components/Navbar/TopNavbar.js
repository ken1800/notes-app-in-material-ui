import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LeftDrawer from "./LeftDrawer";
import SearchDialog from "./SearchDialog";
import { Link } from "react-router-dom";

class TopNavbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: "teal" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <LeftDrawer />
            </IconButton>
            <Typography variant="h6">Online Notes</Typography>
            <div edge="end" style={{ marginLeft: "auto" }}>
              <div
                color="inherit"
                style={{ display: "inline-block", marginRight: "-1em" }}
              >
                <SearchDialog />
              </div>
              <Button
                component={Link}
                to="/account"
                color="inherit"
                style={{ marginRight: "-1.5em" }}
              >
                <AccountBoxIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default TopNavbar;
