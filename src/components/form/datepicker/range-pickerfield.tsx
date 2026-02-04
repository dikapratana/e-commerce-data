import { Flex, DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import styles from "./styles.module.css";

type RangePickerFieldProps = {
  label: string;
  value?: RangePickerProps["value"];
  onChange?: RangePickerProps["onChange"];
  className?: string;
} & Omit<RangePickerProps, "value" | "onChange">;

const RangePickerField = ({
  label,
  value,
  onChange,
  className = "w-full",
  ...props
}: RangePickerFieldProps) => {
  return (
    <Flex className="w-full" justify="space-between" align="end" gap={16}>
      <Flex vertical gap={4} className={className}>
        <label className="text-sm font-medium">{label}</label>
        <div className={styles.datepicker}>
          <DatePicker.RangePicker
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default RangePickerField;
