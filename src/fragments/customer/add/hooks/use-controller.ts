import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { customerSchema, type CustomerSchema } from "../schema";
import { useAddCustomer } from "./use-queries";
import { useNavigate } from "@tanstack/react-router";
import { useNotify } from "../../../../hooks/use-notify";
import { useProviders } from "../../list/hooks/use-queries";

export default function useController() {
  const navigate = useNavigate();
  const { contextHolder, success, error } = useNotify();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(customerSchema),
  });

  const { data: dataProvider, isLoading: isLoadingProvider } = useProviders();
  const { mutate, isPending } = useAddCustomer();

  const onSubmit = (payload: CustomerSchema) => {
    const _payload = {
      ...payload,
      provider: payload.provider.value,
      providerName: payload.provider.label,
      isActive: payload.isActive.value === "true" ? true : false,
      createdAt: new Date().toISOString(),
      code: `CS${new Date().getTime()}`,
      id: new Date().getTime().toString(),
    };
    mutate(_payload, {
      onSuccess: () => {
        reset();
        success("Berhasil", "Data berhasil ditambahkan", {
          onClose: () => navigate({ to: "/customer" }),
        });
      },
      onError: () => {
        error("Gagal", "Data gagal ditambahkan");
      },
    });
  };

  return {
    form: {
      control,
      errors,
      isValid,
      handleSubmit,
      onSubmit,
      loading: isPending,
    },
    provider: {
      data: dataProvider,
      isLoading: isLoadingProvider,
    },
    navigate,
    contextHolder,
  };
}
