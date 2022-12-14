import styled from "styled-components/native";

export const AuthSection = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderBackground = styled.ImageBackground`
  width: 100%;
  position: absolute;
  top: 0;
  height: 60%;
`;

export const AuthContainer = styled.View`
  flex: 0.75;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  z-index: 10;
  bottom: 0;
  background-color: #fff;
  padding-bottom: ${({ theme }) => theme.space[4]};
  padding-horizontal: ${({ theme }) => theme.space[3]};
`;

export const AuthForm = styled.View`
  flex: 1;
  align-items: center;
`;

export const BaseContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  padding-horizontal: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  align-items: center;
  width: 100%;
`;
