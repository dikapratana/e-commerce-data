import { useQuery } from "@tanstack/react-query";
import {
  getTransaction,
  getTransactionById,
} from "../../../../repositories/transaction";

export const useTransactionDetail = (id?: string) => {
  return useQuery({
    queryKey: ["customer/detail", id],
    queryFn: () => getTransactionById(id!),
    enabled: !!id,
  });
};

export function useTransactions(params: TransactionParams) {
  const result = useQuery({
    queryKey: ["customer/transactions", params],
    queryFn: () => getTransaction(params),
    gcTime: 0,
  });

  return {
    ...result,
    ...result.data,
    data: result.data,
  };
}
