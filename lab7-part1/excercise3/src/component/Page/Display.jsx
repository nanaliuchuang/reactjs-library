import React, { Component } from "react";

export default class Display extends Component {
    render() {
      return (
        <div id="display" className="screens">
          {this.props.display}
        </div>
      );
    }
  }