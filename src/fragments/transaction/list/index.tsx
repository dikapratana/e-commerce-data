import { Button, Card, Flex } from "antd";
import SelectField from "../../../components/form/select/select-field";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import InputField from "../../../components/form/input/input-field";
import Table from "./components/table";
import useController from "./hooks/use-controller";
import RangePickerField from "../../../components/form/datepicker/range-pickerfield";
import CardX from "../../../components/Card/cardX";

export default function TransactionFragment() {
  const controller = useController();
  const { onChangeParams, transaction, navigate, customer } = controller;

  return (
    <>
      <Flex vertical gap={16}>
        <Card>
          <h1 className="text-base font-bold mb-2">Filter Data</h1>
          <Flex justify="space-between" align="end" gap={8}>
            <RangePickerField
              label="Tanggal Transaksi"
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
              label="Nama Customer"
              placeholder="Pilih Customer"
              options={customer?.data?.map((item) => ({
                value: item.id,
                label: item.name,
                disabled: !item.isActive,
              }))}
              onChange={(val) =>
                onChangeParams({ customerName: val?.value?.toString() })
              }
            />

            <SelectField
              label="Status"
              placeholder="Pilih Status"
              options={[
                {
                  value: "success",
                  label: "Sukses",
                },
                {
                  value: "pending",
                  label: "Pending",
                },
                {
                  value: "failed",
                  label: "Gagal",
                },
              ]}
              onChange={(val) =>
                onChangeParams({ status: val?.value?.toString() })
              }
            />
            <InputField
              label="Cari Code Transaksi"
              placeholder="cth. TRX123456"
              allowClear
              onClear={() => transaction.onSearch("")}
              suffix={<SearchOutlined />}
              onChange={(e) => transaction.onSearch(e.target.value)}
            />
            <Button
              type="primary"
              onClick={() => navigate({ to: "/transaction/add" })}
            >
              <PlusOutlined />
              Tambah
            </Button>
          </Flex>
        </Card>
        <CardX title="Daftar Transaksi" totalData={transaction?.data?.length}>
          <Table {...controller} />
        </CardX>
      </Flex>
    </>
  );
}
