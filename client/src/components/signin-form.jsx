import React from "react";
import { Stack, Box, TextField, Button, Typography } from "@mui/material";

export default function SignInForm({ onSubmit, buttonText, titleText }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        // m: 2,
      }}
    >
      <Typography componen="h4" variant="h6" sx={{ mb: 4 }}>
        {titleText}
      </Typography>
      <Stack component="form" spacing={2} onSubmit={handleSubmit}>
        <TextField type="email" placeholder="Email" id="email" size="small" />
        <TextField
          type="password"
          placeholder="Password"
          id="password"
          size="small"
        />
        <Button type="submit" variant="contained">
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
}
