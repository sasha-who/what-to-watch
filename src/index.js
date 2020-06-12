import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const rootElement = document.querySelector(`#root`);
const PromoFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

(() => {
  ReactDOM.render(
      <App
        title={PromoFilmData.TITLE}
        genre={PromoFilmData.GENRE}
        date={PromoFilmData.DATE}
      />,
      rootElement
  );
})();
