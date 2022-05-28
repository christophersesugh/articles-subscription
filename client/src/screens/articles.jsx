import React from "react";
import { useAuth } from "context/auth-context";
import { Toolbar } from "@mui/material";

export default function Articles() {
  const { user } = useAuth();
  console.log(user);
  return <Toolbar>{user.email}</Toolbar>;
}
