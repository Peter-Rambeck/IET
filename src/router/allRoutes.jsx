import React from "react";
import { Navigation } from "../components/Navbar";
import { Suspense, lazy } from "react";
import ErrorBoundary from "../ErrorBoundary";
import HomePage from "../pages/homePage/HomePage";
import VietnamPage from "../pages/vietnam/vietnamPage/VietnamPage";
import TonkinExplorerPage from "../pages/vietnam/tonkinExplorer/TonkinExplorer";
import ThailandPage from "../pages/thailand/ThailandPage";
import Template from "../pages/Template";

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

const AllRoutes = () => {
  return (
    <>
      {/*<ScrollTopBehaviour />*/}
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
                <Template />
              </ErrorBoundary>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default AllRoutes;

/*

        <Route path="/" element={<Preview />} />
        <Route path="/home-light-animation" element={<HomeLightAnimation />} />
        <Route
          path="/home-light-rtl-animation"
          element={<HomeLightRtlAnimation />}
        />
        <Route path="/dark-particle-effect" element={<HomeDarkParticles />} />
        <Route
          path="/home-light-professional"
          element={<LightProfessionalAnimation />}
        />
        <Route
          path="/home-light-professional-2"
          element={<HomeLightProfessional2 />}
        />
        <Route path="/home-dark-animation" element={<HomeDarkAnimation />} />
        <Route path="*" element={<NotFound />} />
        */
