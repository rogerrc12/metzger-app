import React from "react";
import { ScrollView, View } from "react-native";
import { Container } from "../../components/layout/container.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { AlertBox, AlertInfoWrapper } from "./components/alerts.styles";

const AlertDetailsScreen = ({ route, navigation }) => {
  const { alert } = route.params;

  const handleEdit = () => navigation.navigate("RegisterAlert", { alertData: alert });

  return (
    <SafeArea>
      <Container>
        <View style={{ flex: 1, width: "100%" }}>
          <Text variant="subtitle">Extintor: {alert.extinguisher.code}</Text>
          <Spacer variant="top" size={2} />
          <AlertInfoWrapper>
            <View>
              <Text variant="subtitle" style={{ color: "#0057D6" }}>
                Estado
              </Text>
              <Text>Enviada</Text>
            </View>
            <View>
              <Text variant="subtitle" style={{ color: "#0057D6" }}>
                Prioridad
              </Text>
              <Text>Alta</Text>
            </View>
          </AlertInfoWrapper>
          <Spacer variant="top" />
          <AlertInfoWrapper>
            <View>
              <Text variant="subtitle" style={{ color: "#0057D6" }}>
                Fecha
              </Text>
              <Text>20-12-1992</Text>
            </View>
            <View>
              <Text variant="subtitle" style={{ color: "#0057D6" }}>
                Creada por
              </Text>
              <Text>Roger Rengifo</Text>
            </View>
          </AlertInfoWrapper>
          <Spacer varaint="top" size={5} />
          <ScrollView>
            <AlertBox>
              <Text variant="bold">No legibles</Text>
              <Spacer variant="top" />
              {!alert.internalCode && <Text variant="caption">C??digo interno</Text>}
              {!alert.qrCode && <Text variant="caption">C??digo QR</Text>}
              {!alert.instructions && <Text variant="caption">Instrucciones</Text>}
              {!alert.controlCard && <Text variant="caption">Tarjeta de control</Text>}
            </AlertBox>
            <Spacer varaint="top" size={2} />
            <AlertBox>
              <Text variant="bold">No conformes</Text>
              <Spacer variant="top" />
              {!alert.pressureGauge && <Text variant="caption">Man??metro</Text>}
              {!alert.pressureGaugeReading && <Text variant="caption">Lector man??metro</Text>}
              {!alert.determinedLoadIndicator && <Text variant="caption">Indicador de carga determinada</Text>}
              {!alert.hose && <Text variant="caption">Manguera</Text>}
              {!alert.nozzle && <Text variant="caption">Boquilla</Text>}
              {!alert.cornet && <Text variant="caption">Corneta</Text>}
              {!alert.piton && <Text variant="caption">Pit??n</Text>}
              {!alert.tires && <Text variant="caption">Llantas</Text>}
              {!alert.label && <Text variant="caption">Marchamo</Text>}
              {!alert.lock && <Text variant="caption">Seguro</Text>}
              {!alert.hoseHolder && <Text variant="caption">Portamanguera</Text>}
              {!alert.paint && <Text variant="caption">Pintura</Text>}
              {!alert.clampingHandle && <Text variant="caption">Manija de sujeci??n</Text>}
              {!alert.actuator && <Text variant="caption">Accionador</Text>}
            </AlertBox>
            <Spacer varaint="top" size={2} />
            {(!alert.hydrostaticTest || !alert.recharge) && (
              <AlertBox>
                <Text variant="bold">Vencidos</Text>
                <Spacer variant="top" />
                {!alert.hydrostaticTest && <Text variant="caption">Prueba hidrost??tica</Text>}
                {!alert.recharge && <Text variant="caption">Recarga</Text>}
              </AlertBox>
            )}
          </ScrollView>
        </View>

        <Button title="Editar alerta" onPress={handleEdit} />
      </Container>
    </SafeArea>
  );
};

export default AlertDetailsScreen;
