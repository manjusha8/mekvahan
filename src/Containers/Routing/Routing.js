import React from "react";
import MainPage from "../HomePage/MainContent/MainPage";
import Login from "../UserAuthentication/Login";
import { Route, Switch } from "react-router-dom";

function Routing() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component= {Login} />
        <Route path="/mekvahan" exact component= {MainPage} />
      </Switch>
    </div>
  );
}

export default Routing;
