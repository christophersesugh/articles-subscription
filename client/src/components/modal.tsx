import React from "react";
import { Box, Button, Dialog } from "@mui/material";

function Modal({ isOpen, setIsOpen, children, ...props }: any) {
  return (
    <Dialog open={isOpen}>
      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            alignSelf: "flex-end",
          }}
          color="error"
          aria-label="close"
          onClick={() => setIsOpen("none")}
        >
          x
        </Button>
        {children}
      </Box>
    </Dialog>
  );
}

export default Modal;
