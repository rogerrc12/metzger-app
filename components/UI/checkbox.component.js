import { CheckBox as RnCheckbox } from "@rneui/themed";

export const Checkbox = ({ children, checked, onChange, error }) => {
  return (
    <RnCheckbox
      checked={checked}
      checkedIcon="check-square"
      onIconPress={onChange}
      containerStyle={{ width: "100%", paddingHorizontal: 0, paddingVertical: 0, marginBottom: 10 }}
      textStyle={{ fontFamily: "poppins-regular" }}
      uncheckedColor={error ? "#d9534f" : "#aaa"}
      title={children}
    />
  );
};
