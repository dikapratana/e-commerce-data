import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { customerSchema, type CustomerSchema } from "../schema";
import { useEditCustomer, useCustomerDetail } from "./use-queries";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useNotify } from "../../../../hooks/use-notify";
import { useProviders } from "../../list/hooks/use-queries";
import { useEffect } from "react";

export default function useController() {
  const params = useParams({ strict: false });

  const navigate = useNavigate();
  const { contextHolder, success, error } = useNotify();

  const { data: dataProvider, isLoading: isLoadingProvider } = useProviders();
  const { mutate, isPending } = useEditCustomer();
  const { data: dataDetail, isLoading: isLoadingDetail } = useCustomerDetail(
    params?.id,
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(customerSchema),
  });

  const onSubmit = (payload: CustomerSchema) => {
    const _payload = {
      ...payload,
      provider: payload.provider.value,
      providerName: payload.provider.label,
      isActive: payload.isActive.value === "true" ? true : false,
      id: params?.id,
    };
    mutate(_payload, {
      onSuccess: () => {
        success("Berhasil", "Data berhasil diubah", {
          onClose: () => navigate({ to: "/customer" }),
        });
      },
      onError: () => {
        error("Gagal", "Data gagal diubah");
      },
    });
  };

  useEffect(() => {
    if (dataDetail) {
      reset({
        name: dataDetail?.name,
        email: dataDetail?.email,
        noTelp: dataDetail?.noTelp,
        provider: {
          value: dataDetail?.provider,
          label: dataDetail?.providerName,
        },
        isActive: {
          value: dataDetail?.isActive ? "true" : "false",
          label: dataDetail?.isActive ? "Aktif" : "Tidak Aktif",
        },
      });
    }
  }, [dataDetail, reset]);

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
    page: {
      loading: isLoadingDetail,
    },
  };
}
