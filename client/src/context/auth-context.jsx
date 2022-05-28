import * as React from "react";
import * as auth from "auth-provider";

import Loading from "components/loading";
import ErrorFallback from "screens/error-fallback";
import { client } from "utils/api-client";
import { useAsync } from "utils/hooks/use-async";

async function getUser() {
  let user = null;
  const token = await auth.getToken();
  if (token) {
    const { data } = await client("auth/me", { token });
    user = data.user;
  }

  return user;
}

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

function AuthProvider(props) {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
    status,
  } = useAsync();

  React.useEffect(() => {
    run(getUser());
  }, [run]);

  const login = (form) => auth.login(form).then((user) => setData(user));
  const signup = (form) => auth.signup(form).then((user) => setData(user));
  const logout = () => {
    auth.logout();
    setData(null);
  };

  if (isLoading || isIdle) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorFallback error={error} />;
  }

  if (isSuccess) {
    const value = { user, login, signup, logout };
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
