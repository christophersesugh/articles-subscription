import React from "react";
import { Box } from "@mui/material";
import hero from "./assets/hero.jpg";

import SignIn from "screens/signin";

export default function UnauthenticatedApp() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // placeItems: "center",
        // backgroundImage: `url(${hero})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // filter: "brightness(60%)",
      }}
    >
      <SignIn />
    </Box>
  );
}
