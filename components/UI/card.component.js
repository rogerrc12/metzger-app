import { Card as RnCard } from "@rneui/themed";
import styled from "styled-components/native";

const InfoCard = styled(RnCard).attrs({
  containerStyle: { minHeight: 145, width: "100%", borderRadius: 10, justifyContent: "center" },
  wrapperStyle: { flexDirection: "row", paddingHorizontal: 10 },
})``;

export default InfoCard;
