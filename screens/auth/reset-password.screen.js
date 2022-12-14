import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { Input } from "../../components/UI/input.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { resetPassword } from "../../services/auth/actions";
import { AuthContainer } from "./components/auth.styles";
import { resetPasswordSchema } from "./validation/schemas";

const ResetPasswordScreen = ({ route }) => {
  const dispatch = useDispatch(),
    isProcessing = useSelector((state) => state.auth.isProcessing),
    params = route.params,
    [hidePassword, setHidePassword] = useState(true),
    [hideConfirmPassword, setHideConfirmPassword] = useState(true),
    formik = useFormik({
      initialValues: { password: "", password_confirmation: "", code: params.code },
      validationSchema: resetPasswordSchema,
      onSubmit: (values) => dispatch(resetPassword(values)),
    });

  return (
    <SafeArea>
      <AuthContainer>
        <Text variant="title">Cambiar contraseña</Text>
        <Text>Crea tu nueva contraseña</Text>
        <Spacer variant="top" size={2} />
        <Input
          label="Nueva contraseña"
          onChangeText={formik.handleChange("password")}
          rightIcon={
            <MaterialCommunityIcons name={hidePassword ? "eye" : "eye-off"} color="#999" size={25} onPress={() => setHidePassword((prev) => !prev)} style={{ marginRight: 10 }} />
          }
          onBlur={formik.handleBlur("password")}
          secureTextEntry={hidePassword}
          isError={formik.touched.password && formik.errors.password}
          errorMessage={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : "Debe contener al menos 8 caracteres, con 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial."
          }
        />

        <Input
          label="Confirmar contraseña"
          onChangeText={formik.handleChange("password_confirmation")}
          onBlur={formik.handleBlur("password_confirmation")}
          rightIcon={
            <MaterialCommunityIcons
              name={hideConfirmPassword ? "eye" : "eye-off"}
              color="#999"
              size={25}
              onPress={() => setHideConfirmPassword((prev) => !prev)}
              style={{ marginRight: 10 }}
            />
          }
          secureTextEntry={hideConfirmPassword}
          isError={formik.touched.password_confirmation && formik.errors.password_confirmation}
          errorMessage={formik.touched.password_confirmation && formik.errors.password_confirmation}
        />
        <Button title="Confirmar" onPress={formik.handleSubmit} disabled={!formik.isValid} loading={isProcessing} />
      </AuthContainer>
    </SafeArea>
  );
};

export default ResetPasswordScreen;
