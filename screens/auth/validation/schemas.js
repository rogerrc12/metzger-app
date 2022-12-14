import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Debes ingresar un correo."),
  password: Yup.string().required("Debes ingresar una contraseña,"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Debes ingresar una contraseña.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&_-]{8,}$/,
      "Formato de contraseña incorrecto. Debe ser de 8 caracteres con 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial."
    ),
  password_confirmation: Yup.string()
    .required("Debes volver a escribir la contraseña.")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden."),
});
