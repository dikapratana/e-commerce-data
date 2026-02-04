import { useMutation, useQuery } from "@tanstack/react-query";
import {
  editCustomer,
  getCustomerById,
} from "../../../../repositories/customer";

export const useCustomerDetail = (id?: string) => {
  return useQuery({
    queryKey: ["customer/edit", id],
    queryFn: () => getCustomerById(id!),
    enabled: !!id,
  });
};

export function useEditCustomer() {
  const result = useMutation({
    mutationFn: editCustomer,
  });
  return {
    ...result,
    data: result.data,
  };
}
