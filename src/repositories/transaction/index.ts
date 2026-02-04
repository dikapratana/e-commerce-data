import api from "../../utils/axios";

export const getTransaction = async (
  params?: TransactionParams,
): Promise<TransactionData[]> => {
  const _newparams = { ...params };
  delete params?.createdAt_gte;
  delete params?.createdAt_lte;
  const res = await api.get("/transactions", { params });
  let data = res.data;

  if (_newparams?.createdAt_gte && _newparams?.createdAt_lte) {
    const start = new Date(_newparams.createdAt_gte).getTime();
    const end = new Date(_newparams.createdAt_lte).getTime();

    data = data.filter((item: TransactionData) => {
      const current = new Date(item.createdAt).getTime();
      return current >= start && current <= end;
    });
  }
  return data;
};

export const addTransaction = async (
  payload?: TransactionPayload,
): Promise<TransactionData[]> => {
  const res = await api.post("/transactions", payload);
  return res.data;
};

export const deleteTransaction = async (id: string): Promise<void> => {
  await api.delete(`/transactions/${id}`);
};

export const getTransactionById = async (
  id: string,
): Promise<TransactionData> => {
  const res = await api.get(`/transactions/${id}`);
  return res.data;
};
