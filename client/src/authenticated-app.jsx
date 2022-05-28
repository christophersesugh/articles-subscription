import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Box } from "@mui/material";

import AppRoutes from "components/app-routes";
import ErrorFallback from "screens/error-fallback";
import Navbar from "components/nav-bar";

export default function AuthenticatedApp() {
  return (
    <Box component="main" sx={{ width: "100vw" }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar />
        <AppRoutes />
      </ErrorBoundary>
    </Box>
  );
}
