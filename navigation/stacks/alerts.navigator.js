import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertDetailsScreen from "../../screens/alerts/alert-details.screen";
import AlertsScreen from "../../screens/alerts/alerts.screen";
import RegisterAlertScreen from "../../screens/alerts/registrer-alert.screen";
import { baseStackOptions, headerTitle } from "../utils/navigation-options";

const AlertsStack = createNativeStackNavigator();

const AlertsNavigator = () => {
  return (
    <AlertsStack.Navigator initialRouteName="AlertsList" screenOptions={({ navigation }) => ({ ...baseStackOptions(navigation) })}>
      <AlertsStack.Screen name="AlertsList" options={{ headerTitle: () => headerTitle("Alertas") }} component={AlertsScreen} />
      <AlertsStack.Screen name="RegisterAlert" options={{ headerTitle: () => headerTitle("Crear alerta") }} component={RegisterAlertScreen} />
      <AlertsStack.Screen name="AlertDetails" options={{ headerTitle: () => headerTitle("Detalles de alerta") }} component={AlertDetailsScreen} />
    </AlertsStack.Navigator>
  );
};

export default AlertsNavigator;
