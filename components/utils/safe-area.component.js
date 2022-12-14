import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const SafeArea = ({ children }) => {
  return <SafeAreaComponent>{children}</SafeAreaComponent>;
};
