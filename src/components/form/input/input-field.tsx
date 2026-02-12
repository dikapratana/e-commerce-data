import { Flex, Input } from "antd";
import type { InputProps } from "antd";

type InputFieldProps = {
  label?: string;
  className?: string;
  error?: string;
  id?: string;
} & InputProps;

const InputField = ({
  label,
  className = "w-full",
  error,
  id,
  ...props
}: InputFieldProps) => {
  const fieldId = id ? id : `id-${props.name}`;
  return (
    <div className={className}>
      <Flex vertical gap={4}>
        {label && (
          <label htmlFor={fieldId} className="text-sm font-medium line-clamp-1">
            {label}
          </label>
        )}

        <Input
          id={fieldId}
          className="text-xs! h-8"
          {...props}
          data-testid={id}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </Flex>
    </div>
  );
};

export default InputField;
