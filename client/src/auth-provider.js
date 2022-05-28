const localStorageKey = "_auth_provider_token_";

const handleUserResponse = (user) => {
  window.localStorage.setItem(localStorageKey, user.data.token);
  return user;
};

const getToken = async () => {
  return window.localStorage.getItem(localStorageKey);
};

const login = ({ email, password }) => {
  return client("auth/login", { email, password }).then(handleUserResponse);
};

const register = ({ email, password }) => {
  return client("auth/register", { email, password }).then(handleUserResponse);
};

const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};

// Auth client

const appURL = process.env.REACT_APP_URL;

async function client(endpoint, data) {
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return window.fetch(`${appURL}${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { getToken, login, register, logout, localStorageKey };
