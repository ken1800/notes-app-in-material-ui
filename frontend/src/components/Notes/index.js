import React, { Component } from "react";

class Notes extends Component {
  render() {
    return (
      <div>
        Notes Description component
        {console.log(this.props.match.params.slug)}
      </div>
    );
  }
}

export default Notes;
