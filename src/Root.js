import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Loading from "./components/Loader";

const Home = lazy(() => import("./compositions/Home"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
