import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { Container } from "../../components/layout/container.component";
import { KeyboardScrollAware } from "../../components/utils/keyboard-scroll.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { headerTitle } from "../../navigation/utils/navigation-options";
import AlertForm from "./components/alert-form.component";
import { AlertWrapper } from "./components/alerts.styles";

const RegisterAlertScreen = ({ route, navigation }) => {
  const { extinguisher, alertData } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => headerTitle(alertData ? "Editar alerta" : "Crear alerta"),
      headerLeft: () => (
        <View style={{ paddingBottom: 0, marginLeft: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate("AlertsList")}>
            <MaterialIcons name={Platform.OS === "android" ? "arrow-back" : "arrow-back-ios"} size={24} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [alertData]);

  return (
    <SafeArea>
      <KeyboardScrollAware>
        <Container>
          <AlertWrapper>
            <Spacer variant="top" size={3} />
            <AlertForm extinguisherId={extinguisher?.id} alertData={alertData} />
          </AlertWrapper>
        </Container>
      </KeyboardScrollAware>
    </SafeArea>
  );
};

export default RegisterAlertScreen;
