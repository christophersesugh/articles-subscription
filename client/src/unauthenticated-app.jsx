import React from "react";
import { Box, Typography } from "@mui/material";
import SignIn from "screens/signin";

export default function UnauthenticatedApp() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `#ccc`,
      }}
    >
      <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
        Premium Articles
      </Typography>
      <Typography component="p" variant="body1" sx={{ mb: 2 }}>
        Feed your mind with positive content.
      </Typography>

      {/* sign in */}
      <SignIn />
    </Box>
  );
}
