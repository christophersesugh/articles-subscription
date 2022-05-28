import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
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
          <CircularProgress size={150} />
        </Box>
      </Box>
    </Box>
  );
}
