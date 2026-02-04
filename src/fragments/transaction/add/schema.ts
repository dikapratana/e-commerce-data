import { z } from "zod";

export const transactionSchema = z.object({
  customer: z.object(
    {
      value: z.string(),
      label: z.string(),
      data: z.any().optional(),
    },
    {
      error: "Nama Customer wajib diisi",
    },
  ),
  provider: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    {
      error: "Provider wajib diisi",
    },
  ),
  package: z.object(
    {
      value: z.string(),
      label: z.string(),
      data: z.any().optional(),
    },
    {
      error: "Paket wajib diisi",
    },
  ),
  customerNo: z.coerce
    .string()
    .nonempty("No. Pelanggan wajib diisi")
    .regex(/^\d+$/, "No. Pelanggan harus berupa angka"),
});

export type TransactionSchema = z.infer<typeof transactionSchema>;
