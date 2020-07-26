import React from "react";
import PropTypes from "prop-types";

const ServerError = ({requestStatus}) => (
  <p>Ошибка: {requestStatus}</p>
);

ServerError.propTypes = {
  requestStatus: PropTypes.number.isRequired
};

export default ServerError;
