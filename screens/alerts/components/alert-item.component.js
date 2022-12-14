import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { InfoItem } from "../../../components/UI/info-item.component";
import { Tooltip } from "../../../components/UI/tooltip.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { ActionBtn, IconWrapper, InfoContent } from "./alerts.styles";

const AlertItem = ({ item, onEdit, onSelect }) => {
  let bgColor = item.status === "Enviada" ? "#FCD5D5" : item.status === "En proceso" ? "#FFE2C7" : "#cfe8ce",
    color = item.status === "Enviada" ? "#B93131" : item.status === "En proceso" ? "#FF9E45" : "#5CB85C";

  return (
    <InfoItem bottomDivider>
      <InfoContent>
        <View style={{ flexDirection: "row" }}>
          <Tooltip content={<Text variant="caption">{`Alerta ${item.status}`}</Text>}>
            <IconWrapper color={bgColor} onPress={onSelect}>
              <MaterialCommunityIcons name="bell-alert-outline" color={color} size={25} />
            </IconWrapper>
          </Tooltip>
          <View style={{ marginLeft: 15 }}>
            <Text variant="bold">Extintor: {item.extinguisher.code}</Text>
            <Text variant="caption">Fecha: {format(new Date(item.createdAt), "dd/MM/yyyy")}</Text>
            <Text variant="caption">Prioridad: {item.priority}</Text>
          </View>
        </View>
        <ActionBtn onPress={onEdit}>
          <Feather name="edit-3" size={25} color="#828282" />
        </ActionBtn>
      </InfoContent>
      <Spacer variant="top" />
    </InfoItem>
  );
};

export default AlertItem;
