import { Flex, DatePicker } from "antd";
import type { DatePickerProps } from "antd";

type DatePickerFieldProps = {
  label: string;
} & DatePickerProps;

const DatePickerField = ({
  label,
  value = null,
  onChange,
  multiple = false,
  maxTagCount = "responsive",
  className = "w-full",
  ...props
}: DatePickerFieldProps) => {
  return (
    <Flex className="w-full" justify="space-between" align="end" gap={16}>
      <Flex vertical gap={4} className={className}>
        <label className="text-sm font-medium">{label}</label>
        <DatePicker
          multiple={multiple}
          onChange={onChange}
          maxTagCount={maxTagCount}
          defaultValue={value}
          {...props}
        />
      </Flex>
    </Flex>
  );
};

export default DatePickerField;
