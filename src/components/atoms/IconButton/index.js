import React from "react";
import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";

const IconButtonComponent = ({ icon, ...props }) => (
  <IconButton edge="start"
    color="inherit"
    aria-label="menu" disabled={props.disabled} onClick={props.onClick}>
    {icon}
  </IconButton>
);

IconButtonComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButtonComponent.defaultProps = {
  disable: false,
};

export default IconButtonComponent;
