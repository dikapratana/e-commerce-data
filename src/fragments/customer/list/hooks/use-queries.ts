import { useQuery } from "@tanstack/react-query";
import { getCustomer } from "../../../../repositories/customer";
import { getProvider } from "../../../../repositories/provider";

export function useCustomers(params: CustomerParams) {
  const result = useQuery({
    queryKey: ["customers", params],
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
    queryKey: ["customers/provider"],
    queryFn: () => getProvider(),
  });

  return {
    ...result,
    ...result.data,
    data: result.data,
  };
}
