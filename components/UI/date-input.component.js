import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useState } from "react";
import { useColorScheme } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styled from "styled-components/native";
import { Input } from "./input.component";

const FormGroup = styled.View`
  width: 100%;
  position: relative;
`;

const CalendarButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: ${({ label }) => (label ? "40%" : "25%")};
  z-index: 10;
`;

export const DateInput = ({ value, placeholder, label, onChange, disabled, isError, errorMessage }) => {
  const [pickerVisible, setPickerVisible] = useState(false),
    colorScheme = useColorScheme();

  // HANDLERS

  const handleConfirm = (date) => {
    onChange(date);
    setPickerVisible(false);
  };

  return (
    <FormGroup>
      <Input
        placeholder={placeholder}
        onFocus={() => setPickerVisible(true)}
        onBlur={() => setPickerVisible(false)}
        value={value ? format(value, "dd/MM/yyyy") : ""}
        showSoftInputOnFocus={false}
        keyboardType="numeric"
        label={label || ""}
        disabled={disabled}
        isError={isError}
        errorMessage={errorMessage}
      />
      <DateTimePickerModal
        locale="es_ES"
        isVisible={pickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisible(false)}
        date={value ? new Date(value) : new Date()}
        isDarkModeEnabled={colorScheme === "dark"}
      />
      <CalendarButton label={label} onPress={() => (disabled ? {} : setPickerVisible(true))}>
        <MaterialCommunityIcons name="calendar" size={23} color="#676767" />
      </CalendarButton>
    </FormGroup>
  );
};
