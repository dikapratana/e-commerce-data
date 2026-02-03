import { Table } from "antd";
import type { TableProps } from "antd";
import styles from "./styles.module.css";

type DataTableProps<T> = {
  columns: TableProps<T>["columns"];
  data: T[];
  loading?: boolean;
  rowKey?: string | ((record: T) => string);
} & TableProps<T>;

const DataTable = <T extends object>({
  columns,
  data,
  loading = false,
  rowKey = "key",
  ...props
}: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <Table<T>
        className={styles.dataTable}
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={rowKey}
        {...props}
      />
    </div>
  );
};

export default DataTable;
