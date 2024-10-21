import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import { CustomIcon } from "../../components";

import { loginFormSchema } from "../../schemas";
import { ILoginRequestDTO } from "../../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface";
import {
  formStyles,
  deviderStyles,
  inputStyles,
  passwordIconStyles,
  fieldWrapperStyles,
  errorMessageStyles,
} from "./LoginFormStyles";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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

  const onSubmit: SubmitHandler<ILoginRequestDTO> = data => {
    console.log(data);
    reset();
  };

  return (
    <Box component="form" sx={formStyles} onSubmit={handleSubmit(onSubmit)}>
      <Button variant="outlined" type="button">
        <CustomIcon iconName="microsoft-logo" />
        Continue with Microsoft
      </Button>
      <Typography sx={deviderStyles}>or</Typography>

      <Box sx={fieldWrapperStyles}>
        <TextField
          type="email"
          label="Email"
          variant="filled"
          sx={inputStyles}
          {...register("email")}
          fullWidth
        />
        {errors.email && (
          <Typography variant="caption" color="error" sx={errorMessageStyles}>
            {errors.email.message}
          </Typography>
        )}
      </Box>

      <FormControl variant="filled" sx={inputStyles}>
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                sx={passwordIconStyles}
                disableRipple
              >
                {showPassword ? <CustomIcon iconName="eye" /> : <CustomIcon iconName="eye-off" />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <Typography variant="caption" color="error" sx={errorMessageStyles}>
            {errors.password.message}
          </Typography>
        )}
      </FormControl>

      <Button variant="outlined" type="submit">
        Log in
      </Button>
    </Box>
  );
};
