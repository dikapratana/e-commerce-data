import { useCallback, useState } from "react";
import { useCustomers, useProviders } from "./use-queries";
import { useDebounce } from "../../../../hooks/use-debounce";

export default function useController(): CustomerController {
  const [params, setParams] = useState<CustomerParams>({});
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useCustomers({
    ...params,
    ...(debouncedSearch ? { name: debouncedSearch } : {}),
  });

  const { data: dataProvider, isLoading: isLoadingProvider } = useProviders();

  const onChangeParams = useCallback((newParams: CustomerParams) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  return {
    customer: {
      data,
      isLoading,
      onSearch: setSearch,
    },
    provider: {
      data: dataProvider,
      isLoading: isLoadingProvider,
    },
    onChangeParams,
  };
}
