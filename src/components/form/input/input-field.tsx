import { Flex, Input } from "antd";
import type { InputProps } from "antd";

type InputFieldProps = {
  label: string;
  className?: string;
} & InputProps;

const InputField = ({
  label,
  className = "w-full",
  ...props
}: InputFieldProps) => {
  return (
    <Flex vertical gap={4} className={className}>
      <label className="text-sm font-medium">{label}</label>

      <Input {...props} />
    </Flex>
  );
};

export default InputField;
