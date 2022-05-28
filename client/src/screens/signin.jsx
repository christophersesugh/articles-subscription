import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useAuth } from "context/auth-context";
import Modal from "../components/modal";
import SignInForm from "../components/signin-form";

export default function SignIn() {
  const [isOpen, setIsOpen] = React.useState("none");
  const { login, register } = useAuth();

  return (
    <Box component="div">
      <Stack spacing={2} direction="row" component="div">
        <Button onClick={() => setIsOpen("login")} variant="contained">
          login
        </Button>
        <Button onClick={() => setIsOpen("register")} variant="outlined">
          register
        </Button>
      </Stack>

      {/* login modal */}
      <Modal isOpen={isOpen === "login"} setIsOpen={setIsOpen}>
        <SignInForm onSubmit={login} label="Login" />
      </Modal>

      {/* register modal */}
      <Modal isOpen={isOpen === "register"} setIsOpen={setIsOpen}>
        <SignInForm onSubmit={register} label="Register" />
      </Modal>
    </Box>
  );
}
