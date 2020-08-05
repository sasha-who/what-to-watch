import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = ({incrementFilmsCountToShow}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={() => {
        incrementFilmsCountToShow();
      }}
    >
      Show more
    </button>
  </div>
);

ShowMoreButton.propTypes = {
  incrementFilmsCountToShow: PropTypes.func.isRequired
};

export default ShowMoreButton;
