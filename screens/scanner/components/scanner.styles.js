import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

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

export const CameraWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
`;

export const ScanButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.buttons.primary};
  border-radius: 10px;
  padding-vertical: ${({ theme }) => theme.space[2]};
  height: 55px;
  padding-horizontal: ${({ theme }) => theme.space[4]};
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  background-color: #f2f2f2;
  padding: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.body};
  height: 55px;
  color: #666;
  border-radius: 10px;
`;

export const SearchInputWrapper = styled.View`
  flex: 1;
  position: relative;
`;

export const SearchIcon = styled(MaterialIcons).attrs({
  size: 30,
  color: "#999",
})`
  position: absolute;
  right: 5px;
  top: 15%;
  padding: 5px;
  z-index: 10;
`;

export const ValidationInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const ValidationWrapper = styled.View`
  width: 100%;
  max-width: 400px;
  align-items: center;
  flex: 1;
`;

export const ValidationButtons = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const ValidationInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
