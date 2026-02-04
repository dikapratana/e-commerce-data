import api from "../../utils/axios";

export const login = async (
  payload?: LoginPayload,
): Promise<LoginData | null> => {
  const res = await api.get("/users", {
    params: { username: payload?.username, password: payload?.password },
  });
  return res.data[0] ?? null;
};
