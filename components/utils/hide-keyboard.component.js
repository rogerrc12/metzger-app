import { KeyboardAvoidingView, Platform } from "react-native";

export const HideKeyboard = ({ children }) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
    {children}
  </KeyboardAvoidingView>
);
