import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 175,
          height: 175,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/animated-icon.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0057D6",
  },
});

export default LoaderScreen;
