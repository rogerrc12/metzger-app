import { Input as RnInput } from "@rneui/themed";
import styled from "styled-components/native";

export const Input = styled(RnInput).attrs(({ theme, errorMessage, isError }) => {
  return {
    containerStyle: { width: "100%", marginTop: 5, paddingHorizontal: 0 },
    inputContainerStyle: { borderWidth: 1, borderRadius: 10, backgroundColor: theme.colors.ui.input, borderColor: theme.colors.ui.input, width: "100%" },
    inputStyle: {
      paddingRight: 14,
      paddingLeft: 20,
      paddingVertical: 15,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: errorMessage && isError ? theme.colors.text.error : "transparent",
    },
    errorStyle: { marginBottom: 5, color: isError ? theme.colors.text.error : "gray" },
  };
})``;
