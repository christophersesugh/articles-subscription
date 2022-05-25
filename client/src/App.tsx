import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Loading } from "components";
const AuthenticatedApp = React.lazy(
  () => import(/* webpackPrefetch: true */ "authenticated-app")
);
const UnuthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const user = false;
  return (
    <main>
      <React.Suspense fallback={<Loading />}>
        {user ? (
          <Router>
            <AuthenticatedApp />
          </Router>
        ) : (
          <UnuthenticatedApp />
        )}
      </React.Suspense>
    </main>
  );
}

export default App;
