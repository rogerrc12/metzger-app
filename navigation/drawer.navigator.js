import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../components/layout/custom-drawer.component";
import AlertsNavigator from "./stacks/alerts.navigator";
import ExtinguishersNavigator from "./stacks/extinguishers.navigator";
import HomeNavigator from "./stacks/home.navigator";

const DrawerNavigator = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <DrawerNavigator.Navigator drawerContent={CustomDrawer} screenOptions={{ headerShown: false }}>
      <DrawerNavigator.Screen name="Main" options={{ drawerLabel: "Inicio" }} component={HomeNavigator} />
      <DrawerNavigator.Screen name="Extinguishers" options={{ drawerLabel: "Extintores" }} component={ExtinguishersNavigator} />
      <DrawerNavigator.Screen name="Alerts" options={{ drawerLabel: "Alertas" }} component={AlertsNavigator} />
    </DrawerNavigator.Navigator>
  );
};

export default AppNavigator;
