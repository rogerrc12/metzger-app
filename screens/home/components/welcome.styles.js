import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.text.title};
  font-family: ${({ theme }) => theme.fonts.title};
  align-self: flex-start;
`;

export const NavContent = styled(LinearGradient).attrs({
  colors: ["#002B5E", "rgba(0, 43, 94, 0.75)", "rgba(0, 43, 94, 0)"],
  start: [0, 1],
  end: [1, 0],
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.space[5]};
  border-radius: 10px;
`;

export const NavItem = styled.ImageBackground.attrs(({ disabled }) => {
  return {
    imageStyle: {
      resizeMode: "cover",
      alignSelf: "flex-end",
      borderRadius: 10,
      opacity: disabled ? 0.4 : 1,
    },
  };
})`
  width: 100%;
  max-width: 400px;
  height: 125px;
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const SquareNavItem = styled.ImageBackground.attrs(({ disabled }) => {
  return {
    imageStyle: {
      resizeMode: "cover",
      alignSelf: "flex-end",
      borderRadius: 10,
      opacity: disabled ? 0.4 : 1,
    },
  };
})`
  width: 100%;
  max-width: 400px;
  height: 150px;
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const NavLabel = styled(Text)`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${({ theme }) => theme.space[2]};
  width: 50%;
`;

export const NavBtn = styled.TouchableOpacity`
  background-color: ${({ theme, disabled }) => (disabled ? "#aaa" : theme.colors.buttons.primary)};
  border-radius: 10px;
  padding: 5px;
  width: 35px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
