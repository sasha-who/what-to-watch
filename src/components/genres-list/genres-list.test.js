import React from "react";
import renderer from "react-test-renderer";
import {films, GENRES} from "../../test-mocks.js";
import GenresList from "../genres-list/genres-list.jsx";

it(`GenresList should render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          films={films}
          currentGenre={GENRES[0]}
          onGenreChange={() => {}}
          onFilmsFilterByGenre={() => {}}
          onFilmsCountToShowReset={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
