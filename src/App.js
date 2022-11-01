import React, { Component } from "react";
import { Navigation } from "./components/Navbar";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
import HomePage from "./pages/homePage/HomePage";
import VietnamPage from "./pages/vietnam/VietnamPage";

import {
  Switch,
  Route,
  Redirect,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";

/* Lazy loading ..
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const TonkinExplorer = lazy(() =>
import("./pages/tonkinExplorer/TonkinExplorer")
);
*/

function App() {
  return (
    <>
      <Navigation />

      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/">
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            </Route>

            <Route exact path="/vietnam">
              <ErrorBoundary>
                <VietnamPage />
              </ErrorBoundary>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
