import React from "react";
import { useAuth } from "context/auth-context";

export default function Articles() {
  const { user } = useAuth();
  return <h1>{user.email}</h1>;
}
