import { useCallback, useState } from "react";
import { useTransactions, useCustomers } from "./use-queries";
import { useDebounce } from "../../../../hooks/use-debounce";
import { useNavigate } from "@tanstack/react-router";

export default function useController(): TransactionController {
  const navigate = useNavigate();

  const [params, setParams] = useState<TransactionParams>({});
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useTransactions({
    ...params,
    ...(debouncedSearch ? { code: debouncedSearch } : {}),
  });
  const { data: dataCustomer } = useCustomers({
    ...params,
    ...(debouncedSearch ? { name: debouncedSearch } : {}),
  });

  const onChangeParams = useCallback((newParams: TransactionParams) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  return {
    customer: {
      data: dataCustomer,
    },
    transaction: {
      data,
      isLoading,
      onSearch: setSearch,
    },
    onChangeParams,
    navigate,
  };
}
