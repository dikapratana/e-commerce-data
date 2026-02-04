export const formatIDR = (value?: number | string | null): string => {
  if (value === null || value === undefined) return "Rp 0";

  const number = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(number)) return "Rp 0";

  return (
    "Rp " +
    number.toLocaleString("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );
};
