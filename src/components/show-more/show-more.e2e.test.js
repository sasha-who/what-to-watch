import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "../show-more/show-more.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const onFilmsCountToShowIncrement = jest.fn();

it(`Click to show more button should cause incrementing of films counter`, () => {
  const showMoreButton = shallow(
      <ShowMoreButton
        onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
      />
  );

  const button = showMoreButton.find(`button`);

  button.simulate(`click`);

  expect(onFilmsCountToShowIncrement.mock.calls.length).toBe(1);
});
