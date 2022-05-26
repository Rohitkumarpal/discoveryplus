import React from "react";
import PropTypes from "prop-types";

import Card from "@mui-material/Card";

const CardComponent = (props) => (
  <Button
    variant="contained"
    color="primary"
    disabled={props.disabled}
    onClick={props.onClick}
    size="medium"
  >
    {props.title}
  </Button>
);

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

CardComponent.defaultProps = {
  disabled: false,
};

export default CardComponent;