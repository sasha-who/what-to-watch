import * as React from "react";
import MultiRef from "react-multi-ref";
import {
  RATING_START_COUNT,
  STAR_CHECKED_BY_DEFAULT,
  ReviewLength,
  CommentPostStatus
} from "../../const";
import {Film} from "../../types";

interface Props {
  film: Film;
  postReview: (review: {rating: number, comment: string}, id: number) => void;
  commentPostStatus: string;
}

class ReviewForm extends React.PureComponent<Props, null> {
  private commentTextRef: React.RefObject<HTMLTextAreaElement>;
  private postButtonRef: React.RefObject<HTMLInputElement>;
  private inputsRefs: MultiRef<unknown, unknown>;

  constructor(props: Props) {
    super(props);

    this.inputsRefs = new MultiRef();
    this.commentTextRef = React.createRef();
    this.postButtonRef = React.createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate(): void {
    const requestStatus = this.props.commentPostStatus;

    switch (requestStatus) {
      case CommentPostStatus.POSTING:
        this.inputsRefs.map.forEach((input) => {
          (input as HTMLInputElement).disabled = true;
        });
        this.commentTextRef.current.disabled = true;
        this.postButtonRef.current.disabled = true;
        break;

      case CommentPostStatus.OK:
        history.back();
        break;

      case CommentPostStatus.ERROR:
        this.inputsRefs.map.forEach((input) => {
          (input as HTMLInputElement).disabled = false;
        });
        this.commentTextRef.current.disabled = false;
        break;
    }
  }

  handleFormSubmit(evt: {preventDefault: () => void;}): void {
    const {
      film,
      postReview
    } = this.props;

    evt.preventDefault();

    let starCount;

    this.inputsRefs.map.forEach((input) => {
      if ((input as HTMLInputElement).checked === true) {
        starCount = (input as HTMLInputElement).value;
        return;
      }
    });

    postReview({
      rating: Number(starCount),
      comment: this.commentTextRef.current.value
    }, film.id);
  }

  render(): React.ReactNode {
    const {commentPostStatus} = this.props;

    return (
      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={this.handleFormSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              {Array(RATING_START_COUNT)
                .fill(``)
                .map((item, index) => {
                  const indexBoost = index + 1;
                  const isChecked = indexBoost === STAR_CHECKED_BY_DEFAULT;

                  return (
                    <React.Fragment key={`star-${indexBoost}`}>
                      <input
                        className="rating__input"
                        id={`star-${indexBoost}`}
                        type="radio"
                        name="rating"
                        defaultValue={indexBoost}
                        defaultChecked={isChecked}
                        ref={this.inputsRefs.ref(indexBoost)}
                      />
                      <label className="rating__label" htmlFor={`star-${indexBoost}`}>
                        Rating {indexBoost}
                      </label>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          {commentPostStatus === CommentPostStatus.ERROR &&
            <p>Произошла ошибка при отправке комментария, попробуйте ещё раз.</p>
          }
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={ReviewLength.MIN_LENGTH}
              maxLength={ReviewLength.MAX_LENGTH}
              ref={this.commentTextRef}
              onInput={() => {
                const commentLength = this.commentTextRef.current.value.length;
                this.postButtonRef.current
                  .disabled = (commentLength < ReviewLength.MIN_LENGTH) ||
                  (commentLength > ReviewLength.MAX_LENGTH);
              }}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                ref={this.postButtonRef}
                disabled
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
