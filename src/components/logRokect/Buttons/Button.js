import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.string.isRequired
};
const defaultProps = {
  children: ""
};

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
