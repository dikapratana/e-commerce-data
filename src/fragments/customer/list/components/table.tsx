/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Space, Tooltip } from "antd";
import type { TableProps } from "antd";
import DataTable from "../../../../components/table/data-table";
import { useMemo } from "react";
import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import { dateFormat } from "../../../../utils/date";

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
        title: "Action",
        key: "action",
        width: "10%",
        render: (value, record: CustomerData) => (
          <Space data-value={value}>
            <Tooltip placement="top" title="Detail">
              <Button
                type="primary"
                className="cursor-pointer text-white bg-yellow-400! text-xs! rounded! h-6! w-6! p-0! flex justify-center items-center"
              >
                <EyeFilled />
              </Button>
            </Tooltip>
            <Tooltip placement="top" title="Edit">
              <Button
                type="primary"
                className="cursor-pointer text-white bg-emerald-400! text-xs! rounded! h-6! w-6! p-0! flex justify-center items-center"
              >
                <EditFilled />
              </Button>
            </Tooltip>

            <Tooltip placement="top" title="Hapus">
              <Button
                type="primary"
                className="cursor-pointer text-white bg-red-400! text-xs! rounded! h-6! w-6! p-0! flex justify-center items-center"
              >
                <DeleteFilled />
              </Button>
            </Tooltip>
          </Space>
        ),
      },
    ],
    [],
  );
  console.log(customer?.data);

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
