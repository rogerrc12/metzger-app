import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import QrScannerScreen from "../../screens/scanner/qr-scanner.screen";
import QrValidationScreen from "../../screens/scanner/qr-validation.screen";
import ScannerErrorScreen from "../../screens/scanner/scanner-error.screen";
import { baseStackOptions, headerTitle } from "../utils/navigation-options";

const ScannerStack = createNativeStackNavigator();

const ScannerNavigator = () => {
  return (
    <ScannerStack.Navigator screenOptions={({ navigation }) => ({ ...baseStackOptions(navigation) })} initialRouteName="QrValidation">
      <ScannerStack.Screen name="QrValidation" options={{ headerTitle: () => headerTitle("Validación de QR") }} component={QrValidationScreen} />
      <ScannerStack.Screen name="QrScanner" options={{ headerTitle: () => headerTitle("Validación de QR"), headerRight: () => null }} component={QrScannerScreen} />
      <ScannerStack.Screen name="ScannerError" options={{ headerShown: false }} component={ScannerErrorScreen} />
    </ScannerStack.Navigator>
  );
};

export default ScannerNavigator;
