import * as React from "react";
import { useAuth } from "context/auth-context";
import Loading from "components/loading";
import { Box } from "@mui/material";

const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const { user } = useAuth();
  return (
    <Box component="main">
      <React.Suspense fallback={<Loading />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </Box>
  );
}

export default App;
