import { useMutation } from "@tanstack/react-query";
import { addCustomer } from "../../../../repositories/customer";

export function useAddCustomer() {
  const result = useMutation({
    mutationFn: addCustomer,
  });
  return {
    ...result,
    data: result.data,
  };
}
