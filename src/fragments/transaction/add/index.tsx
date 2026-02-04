import { Button, Flex } from "antd";
import CardX from "../../../components/Card/cardX";
import SelectField from "../../../components/form/select/select-field";
import useController from "./hooks/use-controller";
import { FormField } from "../../../components/form/formfield/form-field";
import { formatIDR } from "../../../utils/idrFormat";
import InputField from "../../../components/form/input/input-field";

export default function TransactionAddFragment() {
  const controller = useController();
  const {
    form: { control, errors, isValid, handleSubmit, onSubmit, loading },
    provider,
    navigate,
    customer,
    contextHolder,
    packages,
  } = controller;

  return (
    <>
      {contextHolder}
      <CardX title="Tambah Transaksi" backPath="/transaction">
        <FormField
          name="customer"
          label="Nama Customer"
          placeholder="Pilih Customer"
          className="mb-4"
          control={control}
          component={SelectField}
          options={customer?.data?.map((item) => ({
            value: item.id,
            label: item.name,
            data: item,
            disabled: !item.isActive,
          }))}
          error={errors["customer"]?.message}
        />
        <FormField
          name="provider"
          label="Provider"
          placeholder="Masukkan Provider"
          className="mb-4"
          control={control}
          component={SelectField}
          options={provider.data}
          error={errors["provider"]?.message}
        />
        <FormField
          name="package"
          label="Paket"
          placeholder="Pilih Paket"
          className="mb-4"
          control={control}
          component={SelectField}
          disabled={(packages?.data ?? [])?.length === 0 && !provider.selected}
          options={packages?.data?.map((item) => ({
            value: item.id,
            label: `${item.name} - (${formatIDR(item.price)})`,
            data: item,
          }))}
          error={errors["package"]?.message}
        />
        <FormField
          type="number"
          name="customerNo"
          label="No. Pelanggan"
          placeholder="Masukkan No. Pelanggan"
          className="mb-4"
          control={control}
          component={InputField}
          error={errors["customerNo"]?.message}
        />
        <Flex gap={12} justify="end">
          <Button
            className="w-24"
            onClick={() => navigate({ to: "/transaction" })}
          >
            Batal
          </Button>
          <Button
            type="primary"
            onClick={handleSubmit(onSubmit)}
            className="w-24"
            disabled={!isValid || loading}
          >
            Simpan
          </Button>
        </Flex>
      </CardX>
    </>
  );
}
