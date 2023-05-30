import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required("Please enter a valid email")
    .matches("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "Email is invalid"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password should be minimim 8 characters")
    .max(16, "Password should be less than or equal to 16 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-])[A-Za-z\d|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-]{8,16}$/,
      "Password should contain at least one number, one special character, one uppercase lowercase letter."
    ),
});

export const forgotPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .required("Please enter a valid email")
    .matches("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "Email is invalid"),
});
