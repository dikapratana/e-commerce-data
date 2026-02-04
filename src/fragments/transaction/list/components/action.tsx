import { EyeFilled } from "@ant-design/icons";
import { Button } from "antd";

export default function Action({ record, controller }: TransactionActionProps) {
  return (
    <Button
      type="primary"
      onClick={() =>
        controller.navigate({ to: `/transaction/detail/${record.id}` })
      }
      className="cursor-pointer text-white bg-yellow-400! text-xs! rounded! h-6!  flex justify-center items-center"
    >
      <EyeFilled />
      Detail
    </Button>
  );
}
