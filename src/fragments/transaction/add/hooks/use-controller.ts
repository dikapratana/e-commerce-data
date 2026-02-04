import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { transactionSchema, type TransactionSchema } from "../schema";
import { useAddTransaction } from "./use-queries";
import { useNavigate } from "@tanstack/react-router";
import { useNotify } from "../../../../hooks/use-notify";
import {
  useCustomers,
  usePackages,
  useProviders,
} from "../../list/hooks/use-queries";
import { useEffect } from "react";

export default function useController() {
  const navigate = useNavigate();
  const { contextHolder, success, error } = useNotify();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
    resetField,
    clearErrors,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(transactionSchema),
  });

  const provider = useWatch({
    name: "provider",
    control,
  })?.value;

  const customer = useWatch({
    name: "customer",
    control,
  })?.data as CustomerData;

  const { data: dataProvider, isLoading: isLoadingProvider } = useProviders();
  const { data: dataPackage } = usePackages({ provider: provider });
  const { mutate, isPending } = useAddTransaction();

  const { data: dataCustomer } = useCustomers();

  const onSubmit = (payload: TransactionSchema) => {
    const _payload = {
      id: new Date().getTime().toString(),
      code: `TRX${new Date().getTime()}`,
      customerId: payload.customer.value,
      customerName: payload.customer.label,
      provider: payload.provider.value,
      providerName: payload.provider.label,
      packageId: payload.package.value,
      packageName: payload.package.data.name,
      price: payload.package.data.price,
      status: "success",
      createdAt: new Date().toISOString(),
      customerNo: payload.customerNo,
      packageData: payload.package.data,
    };
    mutate(_payload, {
      onSuccess: () => {
        reset();
        success("Berhasil", "Data berhasil ditambahkan", {
          onClose: () => navigate({ to: "/transaction" }),
        });
      },
      onError: () => {
        error("Gagal", "Data gagal ditambahkan");
      },
    });
  };

  useEffect(() => {
    if (customer?.noTelp) {
      setValue("customerNo", customer?.noTelp);
      setValue("provider", {
        value: customer.provider,
        label: customer.providerName,
      });
      clearErrors("provider");
      clearErrors("customerNo");
    }
  }, [
    clearErrors,
    customer?.noTelp,
    customer?.provider,
    customer?.providerName,
    setValue,
  ]);

  useEffect(() => {
    resetField("package");
  }, [provider, resetField]);

  return {
    form: {
      control,
      errors,
      isValid,
      handleSubmit,
      onSubmit,
      loading: isPending,
    },
    customer: {
      data: dataCustomer,
      selected: customer,
    },
    provider: {
      data: dataProvider,
      isLoading: isLoadingProvider,
      selected: !!provider,
    },
    packages: {
      data: dataPackage,
    },
    navigate,
    contextHolder,
  };
}
