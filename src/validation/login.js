import * as yup from "yup";

export const loginValidationSchena = yup.object().shape({
  email: yup.string().email().required("Email es requerido"),
  password: yup
    .string()
    .min(5, "Muy corta")
    .max(10, "Muy largo")
    .required("Password requerido"),
});
