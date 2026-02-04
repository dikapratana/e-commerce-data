import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";
import { Card, Flex } from "antd";

export default function CardX({
  title,
  backPath,
  children,
  totalData,
  loading = false,
}: CardXProps) {
  const navigate = useNavigate();
  return (
    <Card loading={loading}>
      <Flex gap={8} align="center" className="mb-4">
        {backPath && (
          <ArrowLeftOutlined onClick={() => navigate({ to: backPath })} />
        )}

        {title && <h1 className="text-base font-bold">{title}</h1>}
        {totalData > 0 && (
          <span className="bg-blue-100 h-6 min-w-6 rounded-full flex items-center justify-center text-xs font-medium px-4">
            {totalData} Data
          </span>
        )}
      </Flex>
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}
