import { useCallback, useState } from "react";
import { useCustomers, useDeleteCustomer, useProviders } from "./use-queries";
import { useDebounce } from "../../../../hooks/use-debounce";
import { useNavigate } from "@tanstack/react-router";
import { message } from "antd";
import { useNotify } from "../../../../hooks/use-notify";

export default function useController(): CustomerController {
  const navigate = useNavigate();
  const holder = message.useMessage()[1];
  const { contextHolder, success, error } = useNotify();

  const [params, setParams] = useState<CustomerParams>({});
  const [search, setSearch] = useState<string>("");
  const [selectedData, setSelectedData] = useState<CustomerData | undefined>(
    undefined,
  );
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, refetch } = useCustomers({
    ...params,
    ...(debouncedSearch ? { name: debouncedSearch } : {}),
  });

  const { data: dataProvider, isLoading: isLoadingProvider } = useProviders();

  const { mutate: mutateDele, isPending: isLoadingDelete } =
    useDeleteCustomer();

  const confirm = (val: CustomerData) => {
    setSelectedData(val);
    mutateDele(val.id, {
      onSuccess: () => {
        refetch();
        setSelectedData(undefined);
        success("Berhasil", "Data berhasil dihapus", {
          onClose: () => navigate({ to: "/customer" }),
        });
      },
      onError: () => {
        setSelectedData(undefined);
        error("Gagal", "Data gagal dihapus");
      },
    });
  };

  const cancel = () => {};

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
    navigate,
    delete: {
      confirm,
      cancel,
      holder,
      loading: isLoadingDelete,
    },
    snackbar: {
      contextHolder,
    },
    selectedData,
  };
}
