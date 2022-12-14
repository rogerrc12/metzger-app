import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const ActionBtn = styled.TouchableOpacity`
  margin-horizontal: ${({ theme }) => theme.space[1]};
  flex-direction: row;
  align-items: center;
`;

export const InfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InspectionWrapper = styled.View`
  flex: 1;
  width: 100%;
  max-width: 400px;
  align-items: center;
`;

export const NoListWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: 75%;
`;

export const SpinnerWrapper = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.4);
  height: ${Dimensions.get("window").height}px;
  width: ${Dimensions.get("window").width}px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 50px;
  position: absolute;
  bottom: 10px;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
`;

export const HeaderSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({ isValid }) => (isValid ? "rgba(0, 87, 214, 0.5)" : "red")};
  border-radius: 10px;
  padding-horizontal: ${({ theme }) => theme.space[4]};
  height: 65px;
  width: 100%;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InspectionBox = styled.View`
  border-radius: 10px;
  padding-horizontal: ${({ theme }) => theme.space[4]};
  padding-vertical: ${({ theme }) => theme.space[5]};
  border-width: 1px;
  border-color: #999;
  justify-content: center;
`;

export const Caption = styled(Text).attrs({
  variant: "caption",
})`
  color: ${({ success }) => (success === true ? "#5cb85c" : success === false ? "#d9534f" : "#999")};
`;
