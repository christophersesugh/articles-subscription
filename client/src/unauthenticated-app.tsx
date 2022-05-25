import React from "react";
import { Box } from "@mui/material";
import hero from "assets/hero.jpg";

import { Signin } from "components";

export default function UnauthenticatedApp() {
  return (
    <Box
      component="main"
      sx={{
        color: "white",
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "brightness(80%)",
      }}
    >
      <Signin />
    </Box>
  );
}
