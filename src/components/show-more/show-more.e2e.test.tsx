import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "../show-more/show-more";

configure({adapter: new Adapter()});

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
