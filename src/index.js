import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films.js";

const rootElement = document.querySelector(`#root`);

const PromoFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

const onTitleClick = () => {};

ReactDOM.render(
    <App
      title={PromoFilmData.TITLE}
      genre={PromoFilmData.GENRE}
      date={PromoFilmData.DATE}
      films={films}
      onTitleClick={onTitleClick}
    />,
    rootElement
);
