import * as yup from "yup";

export const chatFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required")
    .min(3, "Min name length: 3 characters")
    .max(32, "Max name length: 32 characters"),
});
