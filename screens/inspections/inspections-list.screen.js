import { useEffect } from "react";
import { ActivityIndicator, Dimensions, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { getInspections } from "../../services/inspections/actions";
import InspectionItem from "./components/inspection-item.component";
import { InspectionWrapper, NoListWrapper } from "./components/inspections.styles";

const InspectionsListScreen = ({ route, navigation }) => {
  const params = route.params,
    { isLoading, inspections } = useSelector((state) => state.inspections),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInspections(params?.id));
  }, [dispatch, params]);

  const handleItemAction = (type, item) =>
    type === "register" ? navigation.navigate("RegisterInspection", { inspection: item }) : navigation.navigate("InspectionDetails", { details: item });

  return (
    <SafeArea>
      <Container>
        <InspectionWrapper style={{ justifyContent: "center" }}>
          {isLoading ? (
            <ActivityIndicator color="#0057D6" size="large" />
          ) : inspections.length > 0 ? (
            <>
              <Text variant="title" style={{ alignSelf: "center" }}>
                Extintor: {inspections[0].extinguisher.code}
              </Text>
              <Spacer variant="top" />
              <FlatList
                contentContainerStyle={{ width: "100%" }}
                keyExtractor={(item) => item.id.toString()}
                style={{ maxHeight: Dimensions.get("screen").height / 1.5 }}
                data={inspections}
                renderItem={({ item }) => (
                  <InspectionItem item={item} onEdit={handleItemAction.bind(null, "register", item)} onDetails={handleItemAction.bind(null, "details", item)} />
                )}
              />
            </>
          ) : (
            <NoListWrapper>
              <Text variant="bold" style={{ textAlign: "center" }}>
                No hay inspecciones registrados para este extintor
              </Text>
            </NoListWrapper>
          )}
        </InspectionWrapper>

        <Button title="Registrar inspección" onPress={() => navigation.navigate("RegisterInspection", { extinguisherId: params.id })} />
      </Container>
    </SafeArea>
  );
};

export default InspectionsListScreen;
