import React from "react";
import { Box, Button, Dialog } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  return (
    <Dialog open={isOpen}>
      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f1f1f1",
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
