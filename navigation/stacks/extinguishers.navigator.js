import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "../../screens/extinguishers/camera.screen";
import EditExtinguisherScreen from "../../screens/extinguishers/edit-extinguisher.screen";
import ExtinguishersListScreen from "../../screens/extinguishers/extinguishers-list.screen";
import RegisterExtinguisherScreen from "../../screens/extinguishers/register-extinguisher.screen";
import InspectionDetailsScreen from "../../screens/inspections/inspection-details.screen";
import InspectionsListScreen from "../../screens/inspections/inspections-list.screen";
import RegisterInspectionScreen from "../../screens/inspections/register-inspection.screen";
import { baseStackOptions, headerTitle } from "../utils/navigation-options";

const ExtinguishersStack = createNativeStackNavigator();

const ExtinguishersNavigator = () => {
  return (
    <ExtinguishersStack.Navigator screenOptions={({ navigation }) => ({ ...baseStackOptions(navigation) })}>
      <ExtinguishersStack.Screen name="ExtinguishersList" options={{ headerTitle: () => headerTitle("Extintores") }} component={ExtinguishersListScreen} />
      <ExtinguishersStack.Screen name="InspectionsList" options={{ headerTitle: () => headerTitle("Inspecciones") }} component={InspectionsListScreen} />
      <ExtinguishersStack.Screen name="InspectionDetails" options={{ headerTitle: () => headerTitle("Detalle de inspección") }} component={InspectionDetailsScreen} />
      <ExtinguishersStack.Screen name="RegisterInspection" options={{ headerTitle: () => headerTitle("Registrar inspección") }} component={RegisterInspectionScreen} />
      <ExtinguishersStack.Screen name="RegisterExtinguisher" options={{ headerTitle: () => headerTitle("Registrar extintor") }} component={RegisterExtinguisherScreen} />
      <ExtinguishersStack.Screen name="EditExtinguisher" options={{ headerTitle: () => headerTitle("Editar extintor") }} component={EditExtinguisherScreen} />
      <ExtinguishersStack.Screen name="CameraExtinguisher" options={{ headerTitle: () => headerTitle("Foto de extintor") }} component={CameraScreen} />
    </ExtinguishersStack.Navigator>
  );
};

export default ExtinguishersNavigator;
