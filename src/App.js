import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar";
import CreateForm from "./components/createForm/CreateForm";
import HomePage from "./components/homePage/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/createboard" component={CreateForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
