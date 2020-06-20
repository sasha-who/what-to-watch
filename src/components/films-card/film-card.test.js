import React from "react";
import renderer from "react-test-renderer";
import {filmTitles} from "../../test-mocks.js";
import FilmCard from "./film-card.jsx";

const {title} = filmTitles;

it(`FilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <FilmCard
          title={title}
          onTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
