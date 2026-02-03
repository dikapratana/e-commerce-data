import api from "../../utils/axios";

export const getCustomer = async (
  params?: CustomerParams,
): Promise<CustomerData[]> => {
  const _newparams = { ...params };
  delete params?.createdAt_gte;
  delete params?.createdAt_lte;
  const res = await api.get("/customers", { params });
  let data = res.data;

  if (_newparams?.createdAt_gte && _newparams?.createdAt_lte) {
    const start = new Date(_newparams.createdAt_gte).getTime();
    const end = new Date(_newparams.createdAt_lte).getTime();

    data = data.filter((item: CustomerData) => {
      const current = new Date(item.createdAt).getTime();
      return current >= start && current <= end;
    });
  }
  return data;
};
