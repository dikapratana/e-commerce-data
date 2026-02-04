import { z } from "zod";

export const loginSchema = z.object({
  username: z.coerce.string().nonempty("Username wajib diisi"),
  password: z.coerce.string().nonempty("Password wajib diisi"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
