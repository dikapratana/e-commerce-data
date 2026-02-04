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

export const addCustomer = async (
  payload?: CustomerPayload,
): Promise<CustomerData[]> => {
  const res = await api.post("/customers", payload);
  return res.data;
};

export const deleteCustomer = async (id: string): Promise<void> => {
  await api.delete(`/customers/${id}`);
};

export const getCustomerById = async (id: string): Promise<CustomerData> => {
  const res = await api.get(`/customers/${id}`);
  return res.data;
};

export const editCustomer = async (
  payload: Partial<CustomerPayload>,
): Promise<CustomerData> => {
  const { id, ..._payload } = payload;
  const res = await api.patch(`/customers/${id}`, _payload);
  return res.data;
};
