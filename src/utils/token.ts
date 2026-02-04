import Cookies from "js-cookie";

const TOKEN_KEY = "token";
const USER_KEY = "user_data";

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

export const setUserData = (userData: LoginData) => {
  Cookies.set(USER_KEY, JSON.stringify(userData), {
    expires: 1,
    sameSite: "strict",
  });
};

export const getUserData = (): LoginData => {
  const data = Cookies.get(USER_KEY);
  return JSON.parse(data ?? "{}");
};

export const removeAuth = () => {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(USER_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};
