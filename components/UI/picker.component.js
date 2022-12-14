import { useState } from "react";
import { Platform } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const FormGroup = styled.View`
  width: 100%;
  position: relative;
  height: 63px;
  margin-bottom: 25px;
`;

export const PickerSelect = ({ label, placeholder, value, onChange, name, options, disabled, errorMessage, isError }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <FormGroup>
      {label ? (
        <Text variant="bold" style={{ color: "#999" }}>
          {label}
        </Text>
      ) : null}
      <Dropdown
        style={{ height: 48, backgroundColor: "#F2F2F2", borderRadius: 10, paddingHorizontal: 15, borderWidth: 1, borderColor: isError ? "#d9534f" : "transparent" }}
        placeholderStyle={{ color: "#999" }}
        data={options}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        containerStyle={{ top: Platform.OS === "android" ? -25 : -5 }}
        searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(name, item.value);
          setIsFocus(false);
        }}
        disabled={disabled}
      />
      {isError ? <Text variant="error">{errorMessage}</Text> : null}
    </FormGroup>
  );
};
