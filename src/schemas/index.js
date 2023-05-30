import * as yup from "yup";
import { REGX } from "../shared/CONSTANT";

export const forgotPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .required("Please enter a valid Email Address")
    .matches("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "Email is invalid"),
});

export const loginValidationSchema = yup.object({
  email: forgotPasswordValidationSchema.fields.email,
  password: yup
    .string()
    .required("Please enter a Password")
    .min(8, "Password should be minimim 8 characters")
    .max(16, "Password should be less than or equal to 16 characters.")
    .matches(
      REGX.Password,
      "Password should contain at least one number, one special character, one uppercase lowercase letter."
    ),
});
