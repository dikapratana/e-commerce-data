import { Flex, Select } from "antd";
import type { SelectProps } from "antd";

type SelectFieldProps = {
  label: string;
  className?: string;
} & SelectProps;

const SelectField = ({
  label,
  className = "w-full",
  showSearch = {
    optionFilterProp: "label",
    filterSort: (optionA, optionB) =>
      (optionA?.label ?? "")
        ?.toString()
        .toLowerCase()
        .localeCompare((optionB?.label ?? "")?.toString().toLowerCase()),
  },
  ...props
}: SelectFieldProps) => {
  return (
    <Flex vertical gap={4} className={className}>
      <label className="text-sm font-medium">{label}</label>

      <Select showSearch={showSearch} allowClear {...props} />
    </Flex>
  );
};

export default SelectField;
