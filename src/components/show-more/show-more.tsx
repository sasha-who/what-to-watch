import * as React from "react";

interface Props {
  onFilmsCountToShowIncrement: () => void;
}
const ShowMoreButton: React.FunctionComponent<Props> = (props: Props) => {
  const {onFilmsCountToShowIncrement} = props;

  return (
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
};

export default ShowMoreButton;
