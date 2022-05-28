import React from "react";
import { Box, Typography } from "@mui/material";

export default function ErrorFallback({ error }) {
  return (
    <Box component="div" sx={{ height: "100vh", width: "100vw" }}>
      <Box
        component="div"
        sx={{
          display: "grid",
          placeItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Box>
          <Typography component="h5" variant="h5" align="center">
            Ooh... There is a problem. Try refreshing the page.
          </Typography>
          <Typography
            component="pre"
            varian="body1"
            sx={{ color: "red" }}
            align="center"
          >
            {console.log(error.msg)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
