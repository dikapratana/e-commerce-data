import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteTransaction,
  getTransaction,
} from "../../../../repositories/transaction";
import { getCustomer } from "../../../../repositories/customer";
import { getPackage, getProvider } from "../../../../repositories/provider";

export function useTransactions(params: TransactionParams) {
  const result = useQuery({
    queryKey: ["transactions", params],
    queryFn: () => getTransaction(params),
    gcTime: 0,
  });

  return {
    ...result,
    ...result.data,
    data: result.data,
  };
}

export function useDeleteTransaction() {
  const result = useMutation({
    mutationFn: deleteTransaction,
  });
  return {
    ...result,
    data: result.data,
  };
}

export function useCustomers(params?: CustomerParams) {
  const result = useQuery({
    queryKey: ["transactions/customers", params],
    queryFn: () => getCustomer(params),
    gcTime: 0,
  });

  return {
    ...result,
    ...result.data,
    data: result.data,
  };
}

export function useProviders() {
  const result = useQuery({
    queryKey: ["transactions/provider"],
    queryFn: () => getProvider(),
    gcTime: 0,
  });

  return {
    ...result,
    ...result.data,
    data: result.data,
  };
}

export function usePackages(params?: PackageParams) {
  const result = useQuery({
    queryKey: ["transactions/package", params],
    queryFn: () => getPackage(params),
    gcTime: 0,
    enabled: params?.provider ? true : false,
  });

  return {
    ...result,
    ...result.data,
    data: result.data,
  };
}
