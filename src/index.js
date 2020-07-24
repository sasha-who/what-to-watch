import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as AppStateOperation} from "./reducer/app-state/app-state.js";
import {createAPI} from "./api";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
);
