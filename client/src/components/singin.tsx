import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SigninForm, Modal } from "components";

export default function Signin() {
  const [isOpen, setIsOpen] = React.useState("none");

  const login = (form: any) => {
    console.log(form);
  };

  const register = (form: any) => {
    console.log(form);
  };
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography component="h1" variant="h3" align="center">
          High quality articles
        </Typography>
        <Typography component="p" variant="body1" align="center">
          Feed your mind with positive content.
        </Typography>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            disableElevation
            onClick={() => setIsOpen("login")}
          >
            login
          </Button>
          <Button
            variant="outlined"
            onClick={() => setIsOpen("register")}
            sx={{ borderColor: "white" }}
          >
            register
          </Button>
        </Stack>
      </Stack>

      {/* Login modal */}

      <Modal isOpen={isOpen === "login"} setIsOpen={setIsOpen}>
        <SigninForm onSubmit={login} buttonText="login" headerText="Login" />
      </Modal>

      {/* Register modal */}

      <Modal isOpen={isOpen === "register"} setIsOpen={setIsOpen}>
        <SigninForm
          onSubmit={register}
          buttonText="Register"
          headerText="Register"
        />
      </Modal>
    </Box>
  );
}
