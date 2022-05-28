import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { AuthProvider } from "./auth-context";

const AppProviders = ({ children }) => {
  return (
    <Router>
      <CssBaseline />
      <AuthProvider>{children}</AuthProvider>
    </Router>
  );
};

export { AppProviders };
