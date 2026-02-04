import { z } from "zod";

export const customerSchema = z.object({
  name: z.coerce.string().nonempty("Nama wajib diisi"),
  email: z.coerce
    .string()
    .nonempty("Email wajib diisi")
    .refine((val) => /^\S+@\S+\.\S+$/.test(val), {
      message: "Email tidak valid",
    }),
  noTelp: z.coerce
    .string()
    .nonempty("No. Pelanggan wajib diisi")
    .regex(/^\d+$/, "No. Pelanggan harus berupa angka"),
  provider: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    {
      error: "Provider wajib diisi",
    },
  ),
  isActive: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    {
      error: "Status wajib diisi",
    },
  ),
});

export type CustomerSchema = z.infer<typeof customerSchema>;
