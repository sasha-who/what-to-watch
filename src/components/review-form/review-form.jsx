import React from "react";
import {RATING_START_COUNT, STAR_CHECKED_BY_DEFAULT} from "../../const.js";

const ReviewForm = () => {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array(RATING_START_COUNT)
              .fill()
              .map((item, index) => {
                const isChecked = (index + 1) === STAR_CHECKED_BY_DEFAULT;

                return (
                  <React.Fragment key={`star-${index}`}>
                    <input
                      className="rating__input"
                      id={`star-${index}`}
                      type="radio"
                      name="rating"
                      defaultValue={index}
                      defaultChecked={isChecked}
                    />
                    <label className="rating__label" htmlFor={`star-${index}`}>
                      Rating {index}
                    </label>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
