import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Badge } from "@rneui/themed";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ExtinguisherSquare from "../../../assets/images/icons/extinguisher";
import { Text } from "../../../components/typography/text.component";
import { InfoItem } from "../../../components/UI/info-item.component";
import { Tooltip } from "../../../components/UI/tooltip.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { ActionBtn, InfoContent } from "./extinguishers.styles";

const ExtinguisherItem = ({ item, onEdit, onSelectAlert, onShowInspections }) => {
  const [visible, setVisible] = useState(false);

  return (
    <InfoItem bottomDivider>
      <InfoContent>
        <ExtinguisherSquare />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text variant="bold">Código: {item.code}</Text>
          <Text variant="caption">Ubicación: {item.location.name}</Text>
          <Text variant="caption">Clase: {item.class.name}</Text>
          <View style={{ alignItems: "flex-start", marginTop: 5 }}>
            <Badge
              badgeStyle={{ borderRadius: 0, paddingHorizontal: 10, height: 25, backgroundColor: "#6FCF9780" }}
              status={item.status?.name === "Activo" ? "success" : "error"}
              textStyle={{ color: "#219653" }}
              value={item.status?.name}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", height: "50%" }}>
          <ActionBtn onPress={onEdit}>
            <Feather name="edit-3" size={25} color="#828282" />
          </ActionBtn>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            {item.alerts.map((alert) => (
              <Tooltip
                key={alert.id}
                visible={visible}
                setVisible={() => setVisible(false)}
                content={
                  <>
                    <Text variant="caption">{`Alerta ${alert.status}`}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setVisible(false);
                        onSelectAlert({ ...alert, extinguisher: item });
                      }}
                    >
                      <Text variant="caption" style={{ color: "#0057D6" }}>
                        Ver alerta
                      </Text>
                    </TouchableOpacity>
                  </>
                }
              >
                <MaterialCommunityIcons
                  name="bell-alert-outline"
                  color={alert.status === "Enviada" ? "#B93131" : alert.status === "En proceso" ? "#FF9E45" : "#5CB85C"}
                  size={30}
                  style={{ margin: 5 }}
                  onPress={() => setVisible(true)}
                />
              </Tooltip>
            ))}
          </View>
        </View>
      </InfoContent>
      <Spacer variant="top" />
      <ActionBtn onPress={onShowInspections}>
        <Feather name="search" size={17} color="#0057D6" style={{ marginRight: 5 }} />
        <Text variant="caption" style={{ color: "#0057D6", fontFamily: "poppins-semibold" }}>
          Ver inspecciones
        </Text>
      </ActionBtn>
    </InfoItem>
  );
};

export default ExtinguisherItem;
