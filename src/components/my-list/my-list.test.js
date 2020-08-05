import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus} from "../../const.js";
import {films, userData} from "../../test-mocks.js";
import MyList from "../my-list/my-list.jsx";

it(`MyList should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <MyList
            favoriteFilms={films}
            isFavoriteFilmsLoaded={true}
            loadFilmComments={() => {}}
            loadFavoriteFilms={() => {}}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
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
