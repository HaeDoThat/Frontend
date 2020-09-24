import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainContainer from "./Containers/Main/MainContainer";
import LoginContainer from "./Containers/Login/LoginContainer";
import RegisterContainer from "./Containers/Register/RegisterContainer";

function App() {
  const [loginState, setLoginState] = useState(false);
  const changeLoginState = () => {
    setLoginState(true);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={MainContainer}
          loginState={loginState}
          exact
        />
        <Route
          path="/login"
          component={LoginContainer}
          changeLoginState={changeLoginState}
          exact
        />
        <Route path="/register" component={RegisterContainer} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
