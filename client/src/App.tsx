import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnuthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const user = false;
  return (
    <React.Suspense fallback="loading">
      <main className="container mx-0">
        {user ? (
          <Router>
            <AuthenticatedApp />
          </Router>
        ) : (
          <UnuthenticatedApp />
        )}
      </main>
    </React.Suspense>
  );
}

export default App;
