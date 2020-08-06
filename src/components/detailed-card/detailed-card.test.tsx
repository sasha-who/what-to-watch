import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../const";
import {films, useData, comments} from "../../test-mocks";
import DetailedFilmCard from "../detailed-card/detailed-card";
import {noop} from "../../utils/common";

it(`DetailedFilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <DetailedFilmCard
            match={{params: {id: `1`}, isExact: true, path: ``, url: ``}}
            location={history.location}
            history={history.history}
            authorizationStatus={AuthorizationStatus.NO_AUTHORIZED}
            authorizationData={useData}
            isCommentsLoaded={true}
            films={films}
            similarFilms={films}
            activeFilmComments={comments}
            onActiveFilmChange={noop}
            loadFilmComments={noop}
            onFavoriteStatusChange={noop}
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
