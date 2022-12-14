import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../../screens/auth/login.screen";
import RecoverPasswordScreen from "../../screens/auth/recover-password.screen";
import ResetPasswordScreen from "../../screens/auth/reset-password.screen";
import SplashScreen from "../../screens/auth/splash.screen";
import VerifyCodeScreen from "../../screens/auth/verify-code.screen";
import { baseStackOptions } from "../utils/navigation-options";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="SplashScreen">
      <AuthStack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
      <AuthStack.Screen name="LoginScreen" options={{ animationTypeForReplace: "push", animation: "slide_from_bottom", headerShown: false }} component={LoginScreen} />
      <AuthStack.Screen
        name="RecoverPassword"
        options={({ navigation }) => ({
          ...baseStackOptions(navigation),
          headerRight: () => null,
          headerTitle: "",
        })}
        component={RecoverPasswordScreen}
      />
      <AuthStack.Screen
        name="VerifyCode"
        options={({ navigation }) => ({
          ...baseStackOptions(navigation),
          headerRight: () => null,
          headerTitle: "",
        })}
        component={VerifyCodeScreen}
      />
      <AuthStack.Screen
        name="ResetPassword"
        options={({ navigation }) => ({
          ...baseStackOptions(navigation),
          headerRight: () => null,
          headerTitle: "",
        })}
        component={ResetPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
