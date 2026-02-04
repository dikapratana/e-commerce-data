// constants.ts
export type ChipType = "success" | "failed" | "pending";

export const colorMap: Record<ChipType, string> = {
  success: "green",
  failed: "red",
  pending: "orange",
};

export const defaultText: Record<ChipType, string> = {
  success: "Sukses",
  failed: "Gagal",
  pending: "Pending",
};
