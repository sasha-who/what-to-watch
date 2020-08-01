import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus} from "../../const.js";
import {films, useData, comments} from "../../test-mocks.js";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

const [film] = films;

it(`DetailedFilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
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
            loadFilmComments={() => {}}
            onFavoriteStatusChange={() => {}}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
