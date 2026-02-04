import { Flex, Select } from "antd";
import type { SelectProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";

type SelectFieldProps = {
  label: string;
  className?: string;
  options?: DefaultOptionType[];
  onChange?: (selected: DefaultOptionType | null) => void;
  error?: string;
} & Omit<SelectProps, "options" | "onChange">;

const SelectField = ({
  label,
  error,
  className = "w-full",
  options = [],
  onChange,
  showSearch = {
    optionFilterProp: "label",
    filterSort: (optionA, optionB) =>
      (optionA?.label ?? "")
        .toString()
        .toLowerCase()
        .localeCompare((optionB?.label ?? "")?.toString().toLowerCase()),
  },
  ...props
}: SelectFieldProps) => {
  return (
    <div className={className}>
      <Flex vertical gap={4}>
        <label className="text-sm font-medium">{label}</label>

        <Select
          className="text-xs! h-8"
          showSearch={showSearch}
          allowClear
          options={options}
          {...props}
          onChange={(value) => {
            const selected =
              options.find((item) => item.value === value) ?? null;
            onChange?.(selected);
          }}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </Flex>
    </div>
  );
};

export default SelectField;
