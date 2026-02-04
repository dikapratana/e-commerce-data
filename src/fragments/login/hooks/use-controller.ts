import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../schema";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useLogin } from "./use-queries";
import { useAuthStore } from "../../../store/use-auth-store";
import { useNotify } from "../../../hooks/use-notify";

export default function useController() {
  const { contextHolder, error } = useNotify();
  const navigate = useNavigate();
  const { setToken } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "admin",
      password: "admin123",
    },
  });

  const { mutate, isPending } = useLogin();

  const onSubmit = (payload: LoginSchema) => {
    mutate(payload, {
      onSuccess: (res: LoginData | null) => {
        if (res) {
          setToken(res.token);
          navigate({
            to: "/",
          });
        } else {
          error("Gagal", "Username atau Password salah");
        }
      },
    });
  };

  return {
    form: {
      control,
      errors,
      isValid,
      handleSubmit,
      onSubmit,
      loading: isPending,
    },
    showPassword,
    setShowPassword,
    contextHolder,
  };
}
