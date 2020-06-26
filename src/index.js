import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films.js";

const rootElement = document.querySelector(`#root`);

const promoFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const onTitleClick = () => {};

ReactDOM.render(
    <App
      promoFilmData={promoFilmData}
      films={films}
      onTitleClick={onTitleClick}
    />,
    rootElement
);
