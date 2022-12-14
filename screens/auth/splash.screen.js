import { ImageBackground } from "react-native";
import Logo from "../../assets/images/logo";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { Spacer } from "../../components/utils/spacer.component";
import { BaseContainer, ButtonWrapper } from "./components/auth.styles";

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1, width: "100%", justifyContent: "center" }} source={require("../../assets/images/splash-bg.png")}>
      <BaseContainer>
        <Logo width={225} />
        <Text variant="title" style={{ color: "#222", textAlign: "center", maxWidth: 270 }}>
          Desarrolla un registro completo de tus operaciones
        </Text>
        <Spacer variant="top" size={6} />
        <Spacer variant="top" size={6} />
        <Spacer variant="top" size={6} />
      </BaseContainer>
      <ButtonWrapper>
        <Button onPress={() => navigation.navigate("LoginScreen")} title="Iniciar sesión" />
      </ButtonWrapper>
    </ImageBackground>
  );
};

export default SplashScreen;
