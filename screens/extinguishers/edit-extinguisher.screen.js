import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Platform, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { KeyboardScrollAware } from "../../components/utils/keyboard-scroll.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { getCatalogues, getSublocations } from "../../services/catalogues/actions";
import EditExtinguisherForm from "./components/edit-extinguisher-form.component";
import { ExtinguisherForm, SpinnerWrapper } from "./components/extinguishers.styles";

const EditExtinguisherScreen = ({ navigation, route }) => {
  const isLoading = useSelector((state) => state.catalogues.isLoading),
    params = route.params,
    selectedClient = useSelector((state) => state.clients.selectedClient),
    user = useSelector((state) => state.auth.user),
    dispatch = useDispatch();

  console.log(params);

  useEffect(() => {
    dispatch(getSublocations(params?.extinguisher.locationId));
  }, [params]);

  useEffect(() => {
    dispatch(getCatalogues(params?.extinguisher.clientId));
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
    });
  }, [navigation]);

  return (
    <SafeArea>
      <KeyboardScrollAware>
        <Container>
          <ExtinguisherForm>
            <Spacer variant="top" size={3} />
            {isLoading && (
              <SpinnerWrapper>
                <ActivityIndicator color="#0057D6" size="large" />
              </SpinnerWrapper>
            )}
            <EditExtinguisherForm businessId={params?.extinguisher.clientId} extinguisherData={params?.extinguisher} />
          </ExtinguisherForm>
        </Container>
      </KeyboardScrollAware>
    </SafeArea>
  );
};

export default EditExtinguisherScreen;
