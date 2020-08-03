import * as React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = ({onFilmsCountToShowIncrement}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={() => {
        onFilmsCountToShowIncrement();
      }}
    >
      Show more
    </button>
  </div>
);

ShowMoreButton.propTypes = {
  onFilmsCountToShowIncrement: PropTypes.func.isRequired
};

export default ShowMoreButton;
