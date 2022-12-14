import { ListItem } from "@rneui/themed";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const InfoItem = styled(ListItem).attrs({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 150,
    maxHeight: 250,
    width: Dimensions.get("window").width / 1.15,
    maxWidth: 400,
    marginBottom: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  pad: 15,
})``;
