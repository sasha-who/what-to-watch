import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../const";
import {films, userData} from "../../test-mocks";
import MyList from "../my-list/my-list";
import {noop} from "../../utils/common";

it(`MyList should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <MyList
            favoriteFilms={films}
            isFavoriteFilmsLoaded={true}
            loadFavoriteFilms={noop}
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
