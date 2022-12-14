import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ExtinguishersMenuScreen from "../../screens/home/extinguishers-menu.screen";
import HomeScreen from "../../screens/home/home.screen";
import { baseStackOptions, headerBackLeft, headerLogo } from "../utils/navigation-options";
import ScannerNavigator from "./scanner.navigator";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={({ navigation }) => ({ ...baseStackOptions(navigation), headerLeft: () => headerLogo() })}>
      <HomeStack.Screen name="HomeScreen" options={{ headerTitle: "" }} component={HomeScreen} />
      <HomeStack.Screen
        name="ExtinguishersMenu"
        options={({ navigation }) => ({ headerLeft: () => headerBackLeft(navigation), headerTitle: "" })}
        component={ExtinguishersMenuScreen}
      />
      <HomeStack.Screen name="Scanner" component={ScannerNavigator} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
