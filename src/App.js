import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainContainer from "./Containers/Main/MainContainer";
import LoginContainer from "./Containers/Login/LoginContainer";
import RegisterContainer from "./Containers/Register/RegisterContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/login" component={LoginContainer} exact />
        <Route path="/register" component={RegisterContainer} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
