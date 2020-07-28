import React from "react";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../const.js";
import {films, useData, comments} from "../../test-mocks.js";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

const [film] = films;

it(`DetailedFilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <DetailedFilmCard
          authorizationStatus={AuthorizationStatus.NO_AUTHORIZED}
          authorizationData={useData}
          isCommentsLoaded={true}
          film={film}
          similarFilms={films}
          activeFilmComments={comments}
          isPlayerActive={false}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onPlayerStateChange={() => {}}
          loadFilmComments={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
