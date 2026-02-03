import api from "../../utils/axios";

export const getProvider = async (): Promise<ProviderData[]> => {
  const res = await api.get("/providers");
  return res.data;
};
