import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/, "Email is not valid"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Min password length: 8 characters")
    .max(64, "Max password length: 64 characters")
    .matches(/^\S*$/, "Your password should not contain spaces"),
});
