import { useFormik } from "formik";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { Input } from "../../components/UI/input.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { recoverPassword, verifyCode } from "../../services/auth/actions";
import { AuthContainer } from "./components/auth.styles";

const VerifyCodeScreen = ({ route }) => {
  const dispatch = useDispatch(),
    params = route.params,
    isProcessing = useSelector((state) => state.auth.isProcessing),
    formik = useFormik({ initialValues: { code: "" }, onSubmit: (values) => dispatch(verifyCode(values)) });

  return (
    <SafeArea>
      <AuthContainer>
        <Text variant="title">Verifica tu correo</Text>
        <Spacer variant="top" size={2} />
        <Input
          placeholder="Ingresa tu código"
          label="Código de verificación"
          onChangeText={formik.handleChange("code")}
          keyboardType="number-pad"
          errorMessage="Ingresa el código de verifiación enviado a tu correo"
        />
        <Spacer variant="top" />
        {!isProcessing && (
          <TouchableOpacity onPress={() => dispatch(recoverPassword({ email: params.email }))}>
            <Text variant="bold" style={{ textDecorationLine: "underline" }}>
              Reenviar código
            </Text>
          </TouchableOpacity>
        )}
        <Spacer variant="top" size={3} />
        <Button title="Continuar" onPress={formik.handleSubmit} loading={isProcessing} />
      </AuthContainer>
    </SafeArea>
  );
};

export default VerifyCodeScreen;
