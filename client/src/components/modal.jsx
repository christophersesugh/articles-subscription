import React from "react";
import { Button, Dialog, Box } from "@mui/material";

export default function Modal({ children, isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Button
          aria-label="close"
          onClick={() => setIsOpen("none")}
          variant="outlined"
          color="error"
          sx={{ alignSelf: "end" }}
        >
          X
        </Button>
        {children}
      </Box>
    </Dialog>
  );
}
