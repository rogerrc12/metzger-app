import { MaterialIcons } from "@expo/vector-icons";
import { Platform, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Logo from "../../assets/images/logo";
import { Text } from "../../components/typography/text.component";

export const headerLogo = () => <Logo width={150} />;

export const headerTitle = (title) => (
  <View style={{ width: Platform.OS === "android" ? "93%" : "68%" }}>
    <Text
      variant="subtitle"
      numberOfLines={2}
      style={{ fontSize: 16, lineHeight: 20, marginLeft: Platform.OS === "ios" ? 0 : 20, textAlign: Platform.OS === "ios" ? "center" : "left" }}
    >
      {title}
    </Text>
  </View>
);

export const headerBackLeft = (navigation) => (
  <View style={{ paddingBottom: 0, marginLeft: 8 }}>
    <TouchableOpacity onPress={navigation.goBack}>
      <MaterialIcons color="#002B5E" name={Platform.OS === "android" ? "arrow-back" : "arrow-back-ios"} size={24} />
    </TouchableOpacity>
  </View>
);

export const headerRight = (navigation) => (
  <View style={{ paddingBottom: 0, marginRight: 8 }}>
    <TouchableWithoutFeedback onPress={navigation.openDrawer}>
      <MaterialIcons name="menu" color="#002B5E" size={28} />
    </TouchableWithoutFeedback>
  </View>
);

export const baseStackOptions = (navigation) => ({
  headerRight: () => headerRight(navigation),
  headerLeft: () => headerBackLeft(navigation),
  headerBackVisible: false,
  headerBackTitleVisible: false,
  headerShadowVisible: false,
});
