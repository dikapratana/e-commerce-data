import { useQuery } from "@tanstack/react-query";
import { getTransactionById } from "../../../../repositories/transaction";

export const useTransactionDetail = (id?: string) => {
  return useQuery({
    queryKey: ["transaction/detail", id],
    queryFn: () => getTransactionById(id!),
    enabled: !!id,
  });
};
