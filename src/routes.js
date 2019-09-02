import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Index";
import Post from "./Pages/Post/Index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/posts/:id" component={Post}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
