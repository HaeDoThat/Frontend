import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainContainer from "./Containers/Main/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
