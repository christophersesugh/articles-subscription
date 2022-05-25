import React from "react";
import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      component="div"
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box component="div">
        <CircularProgress size={150} />
      </Box>
    </Box>
  );
}

export default Loading;
