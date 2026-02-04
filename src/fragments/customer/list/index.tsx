import { Button, Card, Flex } from "antd";
import SelectField from "../../../components/form/select/select-field";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import InputField from "../../../components/form/input/input-field";
import Table from "./components/table";
import useController from "./hooks/use-controller";
import RangePickerField from "../../../components/form/datepicker/range-pickerfield";
import CardX from "../../../components/Card/cardX";

export default function CustomerFragment() {
  const controller = useController();
  const {
    onChangeParams,
    customer,
    provider,
    navigate,
    delete: deleteController,
    snackbar,
  } = controller;

  return (
    <>
      {deleteController.holder}
      {snackbar.contextHolder}
      <Flex vertical gap={16}>
        <Card>
          <h1 className="text-base font-bold mb-2">Filter Data</h1>
          <Flex justify="space-between" align="end" gap={8}>
            <RangePickerField
              label="Tanggal Registrasi"
              onChange={(dates) => {
                const isoStart = dates?.[0]
                  ?.startOf("day")
                  .toDate()
                  .toISOString();
                const isoEnd = dates?.[1]?.endOf("day").toDate().toISOString();
                onChangeParams({
                  createdAt_gte: isoStart,
                  createdAt_lte: isoEnd,
                });
              }}
            />
            <SelectField
              label="Status Akun"
              placeholder="Pilih Status"
              options={[
                { value: "true", label: "Aktif" },
                { value: "false", label: "Tidak Aktif" },
              ]}
              onChange={(val) =>
                onChangeParams({ isActive: val?.value === "true" })
              }
            />
            <SelectField
              label="Provider"
              placeholder="Pilih Provider"
              loading={provider.isLoading}
              options={provider.data}
              onChange={(val) =>
                onChangeParams({ provider: (val?.value ?? "")?.toString() })
              }
            />
            <InputField
              label="Cari Customer"
              placeholder="cth. Jhon Doe"
              allowClear
              onClear={() => customer.onSearch("")}
              suffix={<SearchOutlined />}
              onChange={(e) => customer.onSearch(e.target.value)}
            />
            <Button
              type="primary"
              onClick={() => navigate({ to: "/customer/add" })}
            >
              <PlusOutlined />
              Tambah
            </Button>
          </Flex>
        </Card>
        <CardX title="Daftar Customer" totalData={customer?.data?.length}>
          <Table {...controller} />
        </CardX>
      </Flex>
    </>
  );
}
