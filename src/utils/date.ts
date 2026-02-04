import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export const dateFormat = (isoDate: string, patern?: string) => {
  if (!isoDate) return "-";
  return dayjs(isoDate).format(patern ?? "DD MMMM YYYY");
};
