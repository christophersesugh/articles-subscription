import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AppRoutes, FullPageErrorFallback } from "components";

export default function AuthenticatedApp() {
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <main>
        <AppRoutes />
      </main>
    </ErrorBoundary>
  );
}
