import type { TableProps } from "antd";
import DataTable from "../../../components/table/data-table";
import { useMemo } from "react";
import { dateFormat } from "../../../utils/date";
import Chip from "../../../components/chip/chip";
import { formatIDR } from "../../../utils/idrFormat";

const TransactionTable = (props: {
  data: TransactionData[];
  isLoading: boolean;
}) => {
  const { data, isLoading } = props;

  const columns = useMemo<TableProps<TransactionData>["columns"]>(
    () => [
      {
        title: "ID Transaksi",
        dataIndex: "code",
        key: "code",
      },
      {
        title: "Provider",
        dataIndex: "providerName",
        key: "providerName",
      },
      {
        title: "Paket",
        dataIndex: "packageName",
        key: "packageName",
      },
      {
        title: "Harga",
        dataIndex: "price",
        key: "price",
        render(value) {
          return formatIDR(value);
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render(value) {
          return <Chip status={value} />;
        },
      },
      {
        title: "Tanggal Registrasi",
        dataIndex: "createdAt",
        key: "createdAt",
        render(value) {
          return <div>{dateFormat(value, "DD MMMM YYYY HH:mm")}</div>;
        },
      },
    ],
    [],
  );

  return (
    <DataTable<TransactionData>
      columns={columns}
      data={data ?? []}
      loading={isLoading}
      rowKey={(record: TransactionData) => record?.id}
      pagination={false}
    />
  );
};

export default TransactionTable;
