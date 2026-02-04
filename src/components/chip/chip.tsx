import { Tag } from "antd";
import { colorMap, defaultText, type ChipType } from "./constants";

type StatusChipProps = {
  status: ChipType;
  text?: string;
};

const Chip = ({ status, text }: StatusChipProps) => {
  return (
    <Tag color={colorMap[status]} className="flex items-center!">
      {text ?? defaultText[status]}
    </Tag>
  );
};

export default Chip;
