import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderScreen from "../screens/auth/loader.screen";
import { loadSession } from "../services/auth/actions";
import AppNavigator from "./drawer.navigator";
import { navigationRef } from "./root.navigation";
import AuthNavigator from "./stacks/auth.navigator";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const RootNavigator = () => {
  const dispatch = useDispatch(),
    { isSignedIn, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadSession());
  }, [dispatch]);

  if (isLoading) return <LoaderScreen />;

  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      {!isSignedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
