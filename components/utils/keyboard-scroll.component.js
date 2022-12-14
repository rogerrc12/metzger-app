import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

const KeyboardAware = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: 10,
  },
})`
  width: 100%;
`;

export const KeyboardScrollAware = ({ children }) => {
  return <KeyboardAware automaticallyAdjustContentInsets>{children}</KeyboardAware>;
};
