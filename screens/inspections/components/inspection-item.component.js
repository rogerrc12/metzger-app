import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import InspectionSquare from "../../../assets/images/icons/inspection";
import { Text } from "../../../components/typography/text.component";
import Accordion from "../../../components/UI/accordion.component";
import { InfoItem } from "../../../components/UI/info-item.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { ActionBtn, InfoContent } from "./inspections.styles";

const InspectionItem = ({ item, onEdit, onDetails }) => {
  const [showActions, setShowActions] = useState(true);

  return (
    <InfoItem bottomDivider>
      <InfoContent>
        <TouchableOpacity onPress={onDetails}>
          <InspectionSquare width={50} />
        </TouchableOpacity>
        <View>
          <Text variant="bold">Codigo: {item.code}</Text>
          <Text variant="caption">Fecha: {item.createdAt}</Text>
          {item.creator ? <Text variant="caption">Responsable: {`${item.creator.name} ${item.creator.lastName}`}</Text> : null}
          {item.updater ? <Text variant="caption">Editado por: {`${item.updater.name} ${item.updater.lastName}`}</Text> : null}
        </View>
        <ActionBtn onPress={onEdit}>
          <Feather name="edit-3" size={25} color="#828282" />
        </ActionBtn>
      </InfoContent>
      <Spacer variant="top" />
      <Accordion show={showActions} toggleShow={() => setShowActions((prev) => !prev)} title="Acciones">
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          {item.actions.map((action, i) => (
            <Text variant="caption" key={action.id}>
              {action.name} {i + 1 < item.actions.length ? "- " : ""}
            </Text>
          ))}
        </View>
      </Accordion>
    </InfoItem>
  );
};

export default InspectionItem;
