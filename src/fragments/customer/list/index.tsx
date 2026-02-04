import { Button, Card, Flex } from "antd";
import SelectField from "../../../components/form/select/select-field";
import { SearchOutlined } from "@ant-design/icons";
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
          <div className="flex flex-wrap items-end gap-4 justify-between">
            <div className="basis-1/1 md:basis-[calc(100%/2-14px)] lg:basis-[calc(100%/5-14px)]">
              <RangePickerField
                label="Tanggal Registrasi"
                onChange={(dates) => {
                  const isoStart = dates?.[0]
                    ?.startOf("day")
                    .toDate()
                    .toISOString();
                  const isoEnd = dates?.[1]
                    ?.endOf("day")
                    .toDate()
                    .toISOString();
                  onChangeParams({
                    createdAt_gte: isoStart,
                    createdAt_lte: isoEnd,
                  });
                }}
              />
            </div>
            <div className="basis-1/1 md:basis-[calc(100%/2-14px)] lg:basis-[calc(100%/5-14px)]">
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
            </div>
            <div className="basis-1/1 md:basis-[calc(100%/2-14px)] lg:basis-[calc(100%/5-14px)]">
              <SelectField
                label="Provider"
                placeholder="Pilih Provider"
                loading={provider.isLoading}
                options={provider.data}
                onChange={(val) =>
                  onChangeParams({ provider: (val?.value ?? "")?.toString() })
                }
              />
            </div>
            <div className="basis-1/1 md:basis-[calc(100%/2-14px)] lg:basis-[calc(100%/5-14px)]">
              <InputField
                label="Cari Customer"
                placeholder="cth. Jhon Doe"
                allowClear
                onClear={() => customer.onSearch("")}
                suffix={<SearchOutlined />}
                onChange={(e) => customer.onSearch(e.target.value)}
              />
            </div>
            <div className="basis-1/1 md:basis-full lg:basis-[calc(100%/5-14px)]">
              <Button
                type="primary"
                className="w-full"
                onClick={() => navigate({ to: "/customer/add" })}
              >
                Tambah
              </Button>
            </div>
          </div>
        </Card>
        <CardX title="Daftar Customer" totalData={customer?.data?.length}>
          <Table {...controller} />
        </CardX>
      </Flex>
    </>
  );
}
