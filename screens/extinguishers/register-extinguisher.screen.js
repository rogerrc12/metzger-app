import { MaterialIcons } from "@expo/vector-icons";
import { applicationId } from "expo-application";
import { ActivityAction, startActivityAsync } from "expo-intent-launcher";
import { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Linking, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { headerTitle } from "../../navigation/utils/navigation-options";
import { getCatalogues } from "../../services/catalogues/actions";
import { ExtinguisherForm, SpinnerWrapper } from "./components/extinguishers.styles";
import RegisterExtinguisherForm from "./components/register-extinguisher-form.component";

const RegisterExtinguisherScreen = ({ navigation, route }) => {
  const isLoading = useSelector((state) => state.catalogues.isLoading),
    params = route.params,
    selectedClient = useSelector((state) => state.clients.selectedClient),
    user = useSelector((state) => state.auth.user),
    dispatch = useDispatch();

  const handleOpenSettings = () => {
    console.log("opening settings");

    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      const bundleIdentifier = applicationId;

      startActivityAsync(ActivityAction.APPLICATION_DETAILS_SETTINGS, {
        data: `package:${bundleIdentifier}`,
      });
    }
  };

  const handleUploadPhoto = () => navigation.navigate("CameraExtinguisher");

  useEffect(() => {
    dispatch(getCatalogues(user.businessId || selectedClient?.id));
  }, [dispatch, user, selectedClient]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ paddingBottom: 0, marginLeft: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate("ExtinguishersList")}>
            <MaterialIcons name={Platform.OS === "android" ? "arrow-back" : "arrow-back-ios"} size={24} />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => headerTitle("Registrar extintor"),
    });
  }, [navigation]);

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <ExtinguisherForm>
            <Spacer variant="top" size={3} />
            {isLoading && (
              <SpinnerWrapper>
                <ActivityIndicator color="#0057D6" size="large" />
              </SpinnerWrapper>
            )}
            <RegisterExtinguisherForm
              handleUploadPhoto={handleUploadPhoto}
              businessId={user.businessId || selectedClient?.id}
              params={params}
              onOpenSettings={handleOpenSettings}
            />
          </ExtinguisherForm>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default RegisterExtinguisherScreen;
