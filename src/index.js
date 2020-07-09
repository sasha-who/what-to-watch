import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer/reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const rootElement = document.querySelector(`#root`);

const promoFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilmData={promoFilmData}
      />
    </Provider>,
    rootElement
);
