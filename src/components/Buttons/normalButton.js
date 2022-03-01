import React, { Component } from "react";
import { dismissBtn } from "./style/dismissButton";

export default class Button extends Component {
  render() {
    const { onClick, className = "", children } = this.props;
    return (
      <button
        style={{ dismissBtn }}
        onClick={onClick}
        className={className}
        type="button">
        {children}
      </button>
    );
  }
}
