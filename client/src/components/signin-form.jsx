import React from "react";
import {
  Stack,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useAsync } from "utils/hooks/use-async";

export default function SignInForm({ onSubmit, label }) {
  const { run, error, isError, isLoading } = useAsync();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    run(
      onSubmit({
        email: email.value,
        password: password.value,
      })
    );
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
      }}
    >
      <Typography componen="h4" variant="h6" sx={{ mb: 4 }}>
        {label}
      </Typography>
      <Stack component="form" spacing={2} onSubmit={handleSubmit}>
        <TextField type="email" placeholder="Email" id="email" size="small" />
        <TextField
          type="password"
          placeholder="Password"
          id="password"
          size="small"
        />
        <Button type="submit" variant="contained" disabled={isLoading}>
          {isLoading ? <CircularProgress size={25} /> : label}
        </Button>
      </Stack>
      <Box mt={3}>
        {isError ? <Alert severity="error">{error.message}</Alert> : null}
      </Box>
    </Box>
  );
}
