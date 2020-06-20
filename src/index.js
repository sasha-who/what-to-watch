import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const rootElement = document.querySelector(`#root`);

const PromoFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

const filmTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

const onTitleClick = () => {};

ReactDOM.render(
    <App
      title={PromoFilmData.TITLE}
      genre={PromoFilmData.GENRE}
      date={PromoFilmData.DATE}
      filmTitles={filmTitles}
      onTitleClick={onTitleClick}
    />,
    rootElement
);
