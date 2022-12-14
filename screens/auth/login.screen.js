import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../assets/images/logo";
import { Text } from "../../components/typography/text.component";
import { KeyboardScrollAware } from "../../components/utils/keyboard-scroll.component";
import { Spacer } from "../../components/utils/spacer.component";
import { AuthContainer, AuthForm, AuthSection, HeaderBackground } from "./components/auth.styles";
import LoginForm from "./components/login-form.component";

const LoginScreen = ({ navigation }) => {
  return (
    <AuthSection>
      <HeaderBackground source={require("../../assets/images/login-header.png")} />
      <AuthContainer>
        <KeyboardScrollAware>
          <AuthForm>
            <Spacer variant="top" size={4} />
            <Logo width={200} />
            <Spacer variant="top" size={3} />
            <LoginForm />
            <Spacer variant="top" size={3} />
            <TouchableOpacity onPress={() => navigation.navigate("RecoverPassword")}>
              <Text variant="link">¿Olvidaste la contraseña?</Text>
            </TouchableOpacity>
          </AuthForm>
          <Spacer variant="top" />
          <Text variant="bold" style={{ alignSelf: "center", marginTop: "auto" }}>
            Metzger • Copyright 2022
          </Text>
        </KeyboardScrollAware>
      </AuthContainer>
    </AuthSection>
  );
};

export default LoginScreen;
