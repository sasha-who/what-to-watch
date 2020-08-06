import * as React from "react";
import * as renderer from "react-test-renderer";
import {films, GENRES} from "../../test-mocks";
import GenresList from "../genres-list/genres-list";
import {noop} from "../../utils/common";

it(`GenresList should render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          films={films}
          currentGenre={GENRES[0]}
          onGenreChange={noop}
          onFilmsCountToShowReset={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
