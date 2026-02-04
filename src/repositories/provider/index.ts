import api from "../../utils/axios";

export const getProvider = async (): Promise<ProviderData[]> => {
  const res = await api.get("/providers");
  return res.data;
};

export const getPackage = async (
  params?: PackageParams,
): Promise<PackageData[]> => {
  const res = await api.get("/packages", { params });
  return res.data;
};
