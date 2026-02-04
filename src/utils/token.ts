import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 1,
    sameSite: "strict",
    secure: false,
  });
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token;
};
