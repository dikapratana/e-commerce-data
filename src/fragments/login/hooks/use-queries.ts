import { useMutation } from "@tanstack/react-query";
import { login } from "../../../repositories/auth";

export function useLogin() {
  const result = useMutation({
    mutationFn: login,
  });
  return {
    ...result,
    data: result.data,
  };
}
