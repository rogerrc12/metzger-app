import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Animated, LayoutAnimation, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../typography/text.component";

const toggleAnimation = {
  duration: 300,
  update: {
    duration: 300,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

export default function Accordion({ title, children, show, toggleShow }) {
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 250,
      toValue: show ? 0 : 1,
      useNativeDriver: true,
    };

    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);

    toggleShow();
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={toggleListItem}>
        <View style={styles.titleContainer}>
          <Text variant="bold">{title}</Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons name={"keyboard-arrow-right"} size={30} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {show && <View style={styles.bodyContainer}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
  },
  bodyContainer: {
    flex: 1,
    marginTop: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#0057D6",
  },
});
