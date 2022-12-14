import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const InfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AlertWrapper = styled.View`
  flex: 1;
  max-width: 400px;
  align-items: center;
  width: 100%;
`;

export const AlertInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CollapsibleHeader = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.space[2]};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  width: 55px;
  height: 55px;
`;

export const ActionBtn = styled.TouchableOpacity`
  margin-horizontal: ${({ theme }) => theme.space[1]};
  flex-direction: row;
  align-items: center;
`;

export const FiltersWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const FilterButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.space[1]};
  border-radius: 10px;
  min-width: 75px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.buttons.primary};
  background-color: ${({ theme, active }) => (active ? theme.colors.buttons.primary : "transparent")};
`;

export const Filter = styled(Text)`
  color: ${({ theme, active }) => (active ? "#FFF" : theme.colors.text.title)};
`;

export const AlertBox = styled.View`
  border-radius: 10px;
  padding-horizontal: ${({ theme }) => theme.space[4]};
  padding-vertical: ${({ theme }) => theme.space[5]};
  border-width: 1px;
  border-color: #999;
  justify-content: center;
`;
