import { useState } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { KeyboardScrollAware } from "../../components/utils/keyboard-scroll.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { getExtinguisherBySerial, validateQrCode } from "../../services/extinguishers/actions";
import { ScanButton, SearchIcon, SearchInput, SearchInputWrapper, ValidationButtons, ValidationInfo, ValidationInputWrapper, ValidationWrapper } from "./components/scanner.styles";

const QrValidationScreen = ({ navigation, route }) => {
  const [serial, setSerial] = useState(""),
    dispatch = useDispatch(),
    isLoading = useSelector((state) => state.extinguishers.isLoading),
    params = route.params;

  return (
    <SafeArea>
      <KeyboardScrollAware>
        <Container>
          <ValidationWrapper>
            <Spacer variant="top" size={3} />
            <ValidationInfo>
              <Image source={require("../../assets/images/qr-code.webp")} style={{ width: Dimensions.get("window").width / 1.2, height: 300, resizeMode: "contain" }} />
              <Text variant="bold" style={{ textAlign: "center" }}>
                {params?.type === "add-alert" || params?.type === "search-alerts" || params?.type === "search-extinguisher"
                  ? "Busca un extintor asignado escribiendo el serial o escaneando el QR."
                  : "Verifica si el QR o el serial no se encuentra asignado a ningún extintor."}
              </Text>
            </ValidationInfo>
            <ValidationButtons>
              <Spacer variant="top" size={5} />
              <Button variant="primary" title="Escanear QR" onPress={() => navigation.navigate("QrScanner", { type: params?.type })} />
              <Spacer variant="top" />
              <Text>ó buscar</Text>
              <Spacer variant="top" />
              <ValidationInputWrapper>
                <SearchInputWrapper>
                  <SearchInput placeholder="Buscar código QR" placeholderTextColor="#777" value={serial} onChangeText={setSerial} />
                  <SearchIcon name="search" />
                </SearchInputWrapper>
                <Spacer variant="left" />
                <ScanButton
                  onPress={() =>
                    params?.type === "add-alert" || params?.type === "search-extinguisher"
                      ? dispatch(getExtinguisherBySerial({ serial, type: params?.type }))
                      : dispatch(validateQrCode(serial))
                  }
                >
                  {isLoading ? (
                    <ActivityIndicator color="#FFF" />
                  ) : (
                    <Text variant="bold" style={{ color: "#fff" }}>
                      Buscar
                    </Text>
                  )}
                </ScanButton>
              </ValidationInputWrapper>
              <Spacer variant="top" size={2} />
            </ValidationButtons>
          </ValidationWrapper>
        </Container>
      </KeyboardScrollAware>
    </SafeArea>
  );
};

export default QrValidationScreen;
