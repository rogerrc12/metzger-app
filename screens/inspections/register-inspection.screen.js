import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { KeyboardScrollAware } from "../../components/utils/keyboard-scroll.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { headerTitle } from "../../navigation/utils/navigation-options";
import { getAccessories, getActions } from "../../services/catalogues/actions";
import InspectionForm from "./components/inspection-form.component";
import { InspectionWrapper, SpinnerWrapper } from "./components/inspections.styles";

const RegisterInspectionScreen = ({ route, navigation }) => {
  const { extinguisherId, inspection } = route.params,
    dispatch = useDispatch(),
    isLoading = useSelector((state) => state.catalogues.isLoading),
    { isLoading: inspectionLoading } = useSelector((state) => state.inspections);

  useEffect(() => {
    dispatch(getActions());
    dispatch(getAccessories());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => headerTitle(inspection ? "Editar inspección" : "Registrar inspección"),
    });
  }, [inspection]);

  return (
    <SafeArea>
      <KeyboardScrollAware>
        <Container>
          {(isLoading || inspectionLoading) && (
            <SpinnerWrapper>
              <ActivityIndicator color="#0057D6" size="large" />
            </SpinnerWrapper>
          )}
          <InspectionWrapper>
            <InspectionForm extinguisherId={extinguisherId || inspection?.extinguisherId} inspectionData={inspection || {}} />
          </InspectionWrapper>
        </Container>
      </KeyboardScrollAware>
    </SafeArea>
  );
};

export default RegisterInspectionScreen;
