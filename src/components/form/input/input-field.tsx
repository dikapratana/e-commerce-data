import { Flex, Input } from "antd";
import type { InputProps } from "antd";

type InputFieldProps = {
  label?: string;
  className?: string;
  error?: string;
} & InputProps;

const InputField = ({
  label,
  className = "w-full",
  error,
  ...props
}: InputFieldProps) => {
  return (
    <div className={className}>
      <Flex vertical gap={4}>
        {label && (
          <label className="text-sm font-medium line-clamp-1">{label}</label>
        )}

        <Input className="text-xs! h-8" {...props} />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </Flex>
    </div>
  );
};

export default InputField;
