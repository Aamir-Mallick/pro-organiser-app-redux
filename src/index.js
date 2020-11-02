import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import BoardDataReducers from "./redux/reducer/BoardDataReducer";
import firstNodeId from "./redux/reducer/FirstNodeIdReducer";
import columnReducer from "./redux/reducer/GetColumnReducer";

const reducer = combineReducers({
  BoardDataReducers: BoardDataReducers,
  firstNodeId: firstNodeId,
  columnReducer: columnReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
