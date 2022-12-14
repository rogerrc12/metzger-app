import { useEffect } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { getExtinguisherById } from "../../services/extinguishers/actions";
import { Caption, InspectionBox } from "./components/inspections.styles";

const InspectionDetailsScreen = ({ route, navigation }) => {
  const { details } = route.params,
    dispatch = useDispatch(),
    { extinguisherData, isLoading } = useSelector((state) => state.extinguishers);

  useEffect(() => {
    dispatch(getExtinguisherById(details.extinguisherId));
  }, [dispatch]);

  const handleEdit = () => navigation.navigate("RegisterInspection", { inspection: details });

  return (
    <SafeArea>
      <Container>
        {isLoading ? (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator color="#0057D6" size="large" />
          </View>
        ) : (
          <View style={{ flex: 1, width: "100%" }}>
            <Text variant="subtitle">Extintor: {extinguisherData.code}</Text>
            <Text>Fecha de registro: {details.createdAt}</Text>
            <Spacer variant="top" size={5} />
            <ScrollView>
              <InspectionBox>
                <Text variant="bold">Extintor</Text>
                <Text variant="caption">
                  Código interno: <Caption success={!details.internalCode.includes("no")}>{details.internalCode}</Caption>
                </Text>
                <Text variant="caption">
                  Código QR: <Caption success={!details.qrCode.includes("no")}>{details.qrCode}</Caption>
                </Text>
                <Text variant="caption">
                  Manómetro: <Caption success={!details.pressureGauge.includes("no")}>{details.pressureGauge}</Caption>
                </Text>
                <Text variant="caption">
                  Lectura manómetro: <Caption success={!details.pressureGaugeReading.includes("no")}>{details.pressureGaugeReading}</Caption>
                </Text>
                <Text variant="caption">
                  Indicador de carga: <Caption success={!details.determinedLoadIndicator.includes("no")}>{details.determinedLoadIndicator}</Caption>
                </Text>
                <Text variant="caption">
                  Boquilla: <Caption success={!details.nozzle.includes("no")}>{details.nozzle}</Caption>
                </Text>
                <Text variant="caption">
                  Corneta: <Caption success={!details.cornet.includes("no")}>{details.cornet}</Caption>
                </Text>
                <Text variant="caption">
                  Llantas: <Caption success={!details.piton.includes("no")}>{details.piton}</Caption>
                </Text>
                <Text variant="caption">
                  Marchamo: <Caption success={!details.label.includes("no")}>{details.label}</Caption>
                </Text>
                <Text variant="caption">
                  Seguro: <Caption success={!details.lock.includes("no")}>{details.lock}</Caption>
                </Text>
                <Text variant="caption">
                  Portamanguera: <Caption success={!details.hoseHolder.includes("no")}>{details.hoseHolder}</Caption>
                </Text>
                <Text variant="caption">
                  Instrucciones: <Caption success={!details.instructions.includes("no")}>{details.instructions}</Caption>
                </Text>
                <Text variant="caption">
                  Manija de sujeción: <Caption success={!details.clampingHandle.includes("no")}>{details.clampingHandle}</Caption>
                </Text>
                <Text variant="caption">
                  Accionador: <Caption success={!details.actuator.includes("no")}>{details.actuator}</Caption>
                </Text>
              </InspectionBox>
              <Spacer variant="top" size={3} />
              <InspectionBox>
                <Text variant="bold">Control</Text>
                <Text variant="caption">
                  Tarjeta de control: <Caption success={!details.controlCard.includes("no")}>{details.controlCard}</Caption>
                </Text>
                <Text variant="caption">
                  Prueba hidrostática: <Caption success={!details.hydrostaticTest.includes("vencido")}>{details.hydrostaticTest}</Caption>
                </Text>
                <Text variant="caption">
                  Recarga: <Caption success={!details.recharge.includes("vencido")}>{details.recharge}</Caption>
                </Text>
              </InspectionBox>
              <Spacer variant="top" size={3} />
              <InspectionBox>
                <Text variant="bold">Instalaciones</Text>
                <Text variant="caption">
                  Visibilidad de extintor: <Caption success={!details.visibility.includes("no")}>{details.visibility}</Caption>
                </Text>
                <Text variant="caption">
                  Señalización: <Caption success={!details.signaling.includes("no")}>{details.signaling}</Caption>
                </Text>
                <Text variant="caption">
                  Acceso al extintor: <Caption success={!details.access.includes("no")}>{details.access}</Caption>
                </Text>
                <Text variant="caption">
                  Gancho: <Caption success={!details.hook.includes("no")}>{details.hook}</Caption>
                </Text>
              </InspectionBox>
              {details.actions?.length > 0 && (
                <>
                  <Spacer variant="top" size={3} />
                  <InspectionBox>
                    <Text variant="bold">Acciones</Text>
                    {details.actions.map((action) => (
                      <Text key={action.id} variant="caption">
                        {action.name}
                      </Text>
                    ))}
                  </InspectionBox>
                </>
              )}
              {details.accessories?.length > 0 && (
                <>
                  <Spacer variant="top" size={3} />
                  <InspectionBox>
                    <Text variant="bold">Accesorios</Text>
                    {details.accessories.map((accessory) => (
                      <Text key={accessory.id} variant="caption">
                        {accessory.name}
                      </Text>
                    ))}
                  </InspectionBox>
                </>
              )}
            </ScrollView>
            <Spacer variant="top" size={3} />
          </View>
        )}

        <Button title="Editar inspección" onPress={handleEdit} />
      </Container>
    </SafeArea>
  );
};

export default InspectionDetailsScreen;
