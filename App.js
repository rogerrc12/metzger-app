import { ThemeProvider } from "@rneui/themed";
import "expo-dev-client";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { connectToDevTools } from "react-devtools-core";
import { Platform, UIManager } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import * as Sentry from "sentry-expo";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import OtaUpdater from "./hoc/ota-updater.component";
import RootNavigator from "./navigation";
import store from "./store";
import { theme } from "./theme";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8081,
  });
}

Sentry.init({
  dsn: "https://e3c871d5d50446b592a7d9d7afe330ec@o342788.ingest.sentry.io/6546451",
  enableInExpoDevelopment: true,
  debug: !!__DEV__, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
          "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
          "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
        });
      } catch (error) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    })();
  }, []);

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StyledThemeProvider theme={theme}>
          <ThemeProvider>
            <StatusBar style="auto" />
            <RootNavigator />

            <OtaUpdater />
          </ThemeProvider>
        </StyledThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
