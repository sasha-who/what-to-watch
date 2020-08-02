import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus} from "../../const.js";
import {films, useData, comments} from "../../test-mocks.js";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

it(`DetailedFilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <DetailedFilmCard
            match={{params: {id: 1}, isExact: true, path: ``, url: ``}}
            authorizationStatus={AuthorizationStatus.NO_AUTHORIZED}
            authorizationData={useData}
            isCommentsLoaded={true}
            films={films}
            similarFilms={films}
            activeFilmComments={comments}
            isPlayerActive={false}
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
