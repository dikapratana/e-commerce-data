import type { TableProps } from "antd";
import DataTable from "../../../../components/table/data-table";
import { useMemo } from "react";
import { dateFormat } from "../../../../utils/date";
import Action from "./action";
import Chip from "../../../../components/chip/chip";
import { formatIDR } from "../../../../utils/idrFormat";

const TransactionTable = (props: TransactionController) => {
  const { transaction } = props;

  const columns = useMemo<TableProps<TransactionData>["columns"]>(
    () => [
      {
        title: "ID Transaksi",
        dataIndex: "code",
        key: "code",
      },

      {
        title: "Customer",
        dataIndex: "customerName",
        key: "customerName",
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
      {
        title: "Action",
        key: "action",
        width: "10%",
        render: (value, record: TransactionData) => (
          <Action value={value} record={record} controller={props} />
        ),
      },
    ],
    [props],
  );

  return (
    <DataTable<TransactionData>
      columns={columns}
      data={transaction?.data ?? []}
      loading={transaction.isLoading}
      rowKey={(record: TransactionData) => record?.id}
      pagination={false}
    />
  );
};

export default TransactionTable;
