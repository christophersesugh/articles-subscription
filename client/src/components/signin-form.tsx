import * as React from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useAsync } from "utils/hooks/use-async";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface UserFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface ModalProps {
  headerText: string;
  buttonText: string;
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
}

function LoginForm({ onSubmit, headerText, buttonText }: ModalProps) {
  const { run, isError, isLoading, error } = useAsync();

  const handleSubmit = (event: React.FormEvent<UserFormElement>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    run(
      onSubmit({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Stack
      component="form"
      spacing={2}
      aria-label="Register"
      onSubmit={handleSubmit}
    >
      <Typography component="h3" variant="h4" align="center" sx={{ mb: 1.5 }}>
        {headerText}
      </Typography>
      <TextField id="email" type="email" placeholder="Email" size="small" />
      <TextField
        id="password"
        type="password"
        placeholder="Password"
        size="small"
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained">
          {buttonText}
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: "#fff", marginLeft: 1 }} />
          ) : null}
        </Button>
      </Stack>

      {isError && <Alert severity="error">{error.message}</Alert>}
    </Stack>
  );
}

export default LoginForm;
