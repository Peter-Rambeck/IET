import React from "react";
import { Navigation } from "./components/Navbar";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
import HomePage from "./pages/homePage/HomePage";
import VietnamPage from "./pages/vietnam/vietnamPage/VietnamPage";
import TonkinExplorerPage from "./pages/vietnam/tonkinExplorer/TonkinExplorer";
import ThailandPage from "./pages/thailand/ThailandPage";

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
            <Route path="/thailand">
              <ErrorBoundary>
                <ThailandPage />
              </ErrorBoundary>
            </Route>

            <Route path="/vietnam">
              <ErrorBoundary>
                <VietnamPage />
              </ErrorBoundary>
            </Route>

            <Route path="/tonkin">
              <ErrorBoundary>
                <TonkinExplorerPage />
              </ErrorBoundary>
            </Route>

            <Route path="/about">
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
