import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import { Button, Popconfirm, Space, Tooltip } from "antd";

export default function Action({ value, record, controller }: ActionProps) {
  const { delete: deleteController, selectedData, navigate } = controller;

  return (
    <Space data-value={value}>
      <Tooltip placement="top" title="Detail">
        <Button
          onClick={() => navigate({ to: `/customer/detail/${record.id}` })}
          type="primary"
          className="cursor-pointer text-white bg-yellow-400! text-xs! rounded! h-6! w-6! p-0! flex justify-center items-center"
        >
          <EyeFilled />
        </Button>
      </Tooltip>
      <Tooltip placement="top" title="Edit">
        <Button
          onClick={() => navigate({ to: `/customer/edit/${record.id}` })}
          type="primary"
          className="cursor-pointer text-white bg-emerald-400! text-xs! rounded! h-6! w-6! p-0! flex justify-center items-center"
        >
          <EditFilled />
        </Button>
      </Tooltip>

      <Tooltip placement="top" title="Hapus">
        <Popconfirm
          title="Hapus Data"
          description="Apakah yakin hapus data ini?"
          onConfirm={() => deleteController.confirm(record)}
          okText="Lanjutkan"
          cancelText="batal"
        >
          <Button
            disabled={
              deleteController.loading && selectedData?.id === record.id
            }
            type="primary"
            className="cursor-pointer text-white bg-red-400! disabled:bg-neutral-200! text-xs! rounded! h-6! w-6! p-0! flex justify-center items-center"
          >
            <DeleteFilled />
          </Button>
        </Popconfirm>
      </Tooltip>
    </Space>
  );
}
