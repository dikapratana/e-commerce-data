import { create } from "zustand";
import { getToken, setToken, removeToken } from "../utils/token";

type AuthState = {
  token?: string;
  isAuthenticated: boolean;

  setToken: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: getToken(),
  isAuthenticated: !!getToken(),

  setToken: (token) => {
    setToken(token);
    set({
      token,
      isAuthenticated: true,
    });
  },

  logout: () => {
    removeToken();
    set({
      token: undefined,
      isAuthenticated: false,
    });
  },
}));
