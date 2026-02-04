import type { TableProps } from "antd";
import DataTable from "../../../../components/table/data-table";
import { useMemo } from "react";
import { dateFormat } from "../../../../utils/date";
import Action from "./action";
import Chip from "../../../../components/chip/chip";

const CustomerTable = (props: CustomerController) => {
  const { customer } = props;

  const columns = useMemo<TableProps<CustomerData>["columns"]>(
    () => [
      {
        title: "ID Customer",
        dataIndex: "code",
        key: "code",
      },
      {
        title: "Tanggal Registrasi",
        dataIndex: "createdAt",
        key: "createdAt",
        render(value) {
          return <div>{dateFormat(value)}</div>;
        },
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Provider",
        dataIndex: "providerName",
        key: "providerName",
      },
      {
        title: "No. Pelanggan",
        dataIndex: "noTelp",
        key: "noTelp",
      },
      {
        title: "Status",
        dataIndex: "isActive",
        key: "isActive",
        render: (value) => (
          <Chip
            status={value ? "success" : "failed"}
            text={value ? "Aktif" : "Tidak Aktif"}
          />
        ),
      },
      {
        title: "Action",
        key: "action",
        width: "10%",
        render: (value, record: CustomerData) => (
          <Action value={value} record={record} controller={props} />
        ),
      },
    ],
    [props],
  );

  return (
    <DataTable<CustomerData>
      columns={columns}
      data={customer?.data ?? []}
      loading={customer.isLoading}
      rowKey={(record: CustomerData) => record?.id}
      pagination={false}
    />
  );
};

export default CustomerTable;
