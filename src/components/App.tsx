import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import routes from "../routes/routes";
import Navigation from "./Navigation/Navigation";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MyLoader from "./MyLoader/MyLoader";

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route
            exact
            path={routes.TODOS_PAGE.path}
            component={routes.TODOS_PAGE.component}
          />
          <Route
            path={routes.TODOS_EDIT.path}
            component={routes.TODOS_EDIT.component}
          />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
