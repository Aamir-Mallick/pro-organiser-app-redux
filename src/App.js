import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateForm from "./components/createForm/CreateForm";
import HomePage from "./components/homePage/HomePage";
import BoardPage from "./components/board/BoardPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/createboard" component={CreateForm} />
          <Route path="/board:uid" component={BoardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
