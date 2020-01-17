import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import NoteIcon from "@material-ui/icons/Note";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const bottomNavStyle = {
  position: "fixed",
  backgroundColor: "#000",
  width: "100%",
  bottom: "0",
  zIndex: "1"
};
const navActionStyles = {
  root: {
    color: "rgb(150, 150, 150)",
    "&$selected": {
      color: "rgb(238, 238, 238)"
    }
  },
  selected: {}
};
class Navbar extends React.Component {
  state = {
    value: "home"
  };
  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };
  render() {
    const actionClasses = this.props.classes;
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={this.handleChange}
        showLabels
        style={bottomNavStyle}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          value="home"
          icon={<Home />}
          classes={actionClasses}
        />

        <BottomNavigationAction
          component={Link}
          to="/add-notes"
          label="Add Notes"
          value="add_notes"
          icon={<NoteAddIcon />}
          classes={actionClasses}
        />
        <BottomNavigationAction
          component={Link}
          to="/favourites"
          label="Favorites"
          value="favorites"
          classes={actionClasses}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/my-notes"
          label="My Notes"
          value="my_notes"
          classes={actionClasses}
          icon={<NoteIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(navActionStyles)(Navbar);
