import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';

const ButtonComponent = (props) => (
  <Button
    variant={props.variant}
    color={props.color}
    disabled={props.disabled}
    onClick={props.onClick}
    size="medium"
  >
    {props.title}
  </Button>
);

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  variant:PropTypes.string,
  color:PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  disabled: false,
};

export default ButtonComponent;
