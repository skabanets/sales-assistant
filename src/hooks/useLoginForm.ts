import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../hooks";
import { useLoginMutation } from "../services";
import { setUserInfo } from "../redux";
import { loginFormSchema } from "../schemas/loginFormSchema";
import { ILoginRequestDTO } from "../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface";
import { getFormatErrorMessage } from "../heplers";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequestDTO>({
    mode: "onSubmit",
    resolver: yupResolver(loginFormSchema),
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const onSubmit = async (credentials: ILoginRequestDTO) => {
    try {
      const data = await login(credentials)
        .unwrap()
        .catch(error => {
          const errorCode = error?.data?.error?.errorCode;
          if (typeof errorCode === "string") {
            const errorMessage = getFormatErrorMessage(errorCode);
            setError(errorMessage || "Unknown error");
          } else {
            setError("An unexpected error occurred.");
          }
          throw error;
        });

      dispatch(setUserInfo(data));
      reset();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return {
    showPassword,
    handleClickShowPassword,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
  };
};
