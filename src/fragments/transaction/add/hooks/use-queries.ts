import { useMutation } from "@tanstack/react-query";
import { addTransaction } from "../../../../repositories/transaction";

export function useAddTransaction() {
  const result = useMutation({
    mutationFn: addTransaction,
  });
  return {
    ...result,
    data: result.data,
  };
}
