import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { Input } from "../../components/UI/input.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { recoverPassword } from "../../services/auth/actions";
import { AuthContainer } from "./components/auth.styles";

const RecoverPasswordScreen = () => {
  const dispatch = useDispatch(),
    isProcessing = useSelector((state) => state.auth.isProcessing),
    formik = useFormik({ initialValues: { email: "" }, onSubmit: (values) => dispatch(recoverPassword(values)) });

  return (
    <SafeArea>
      <AuthContainer>
        <Spacer variant="top" size={4} />
        <Text variant="title">Restablecer contraseña</Text>
        <Text>Ingresa tu correo para poder ayudarte</Text>
        <Spacer variant="top" size={4} />
        <Input placeholder="Correo electrónico" onChangeText={formik.handleChange("email")} autoCapitalize="none" keyboardType="email-address" />
        <Button title="Continuar" onPress={formik.handleSubmit} loading={isProcessing} />
      </AuthContainer>
    </SafeArea>
  );
};

export default RecoverPasswordScreen;
