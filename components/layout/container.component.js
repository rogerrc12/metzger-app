import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width}px;
  max-width: 600px;
  padding-vertical: ${({ theme }) => theme.space[3]};
  padding-horizontal: ${({ theme }) => theme.space[4]};
  align-items: center;
  flex: 1;
`;
