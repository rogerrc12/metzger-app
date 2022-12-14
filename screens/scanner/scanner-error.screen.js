import React from "react";
import { Dimensions, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";

const ScannerErrorScreen = ({ navigation }) => {
  const errorMessage = useSelector((state) => state.extinguishers.error);

  return (
    <SafeArea>
      <Container>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image source={require("../../assets/images/validation-error.webp")} style={{ width: Dimensions.get("window").width / 1.2, height: 350 }} resizeMode="contain" />
          <Spacer variant="top" size={2} />
          <Text variant="subtitle">Ha ocurrido un error</Text>
          <Spacer variant="top" />
          <Text>{errorMessage}</Text>
        </View>
        <Button onPress={() => navigation.goBack()} title="Intentar de nuevo" />
      </Container>
    </SafeArea>
  );
};

export default ScannerErrorScreen;
