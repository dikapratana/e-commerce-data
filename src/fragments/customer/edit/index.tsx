import { Button, Flex } from "antd";
import CardX from "../../../components/Card/cardX";
import InputField from "../../../components/form/input/input-field";
import SelectField from "../../../components/form/select/select-field";
import useController from "./hooks/use-controller";
import { FormField } from "../../../components/form/formfield/form-field";

export default function EditFragment() {
  const controller = useController();
  const {
    form: { control, errors, isValid, handleSubmit, onSubmit, loading },
    provider,
    navigate,
    contextHolder,
    page,
  } = controller;

  return (
    <>
      {contextHolder}
      <CardX title="Edit Customer" backPath="/customer" loading={page.loading}>
        <FormField
          name="name"
          control={control}
          component={InputField}
          label="Nama"
          placeholder="Masukkan nama"
          className="mb-4"
          error={errors["name"]?.message}
        />
        <FormField
          name="email"
          label="Email"
          placeholder="Masukkan email"
          className="mb-4"
          control={control}
          component={InputField}
          error={errors["email"]?.message}
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
          type="number"
          name="noTelp"
          label="No. Pelanggan"
          placeholder="Masukkan No. Pelanggan"
          className="mb-4"
          control={control}
          component={InputField}
          error={errors["noTelp"]?.message}
        />
        <FormField
          name="isActive"
          label="Status Akun"
          placeholder="Pilih Status"
          className="mb-4"
          control={control}
          component={SelectField}
          options={[
            { value: "true", label: "Aktif" },
            { value: "false", label: "Tidak Aktif" },
          ]}
          error={errors["isActive"]?.message}
        />
        <Flex gap={12} justify="end">
          <Button
            className="w-24"
            onClick={() => navigate({ to: "/customer" })}
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
