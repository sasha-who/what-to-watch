import * as React from "react";
import PropTypes from "prop-types";

const ServerError = ({requestStatus}) => (
  <p>Error: {requestStatus}</p>
);

ServerError.propTypes = {
  requestStatus: PropTypes.number.isRequired
};

export default ServerError;
