import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "../../components/layout/container.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { NavBtn, NavContent, NavLabel, SquareNavItem } from "./components/welcome.styles";

const ExtinguishersMenuScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <Spacer variant="top" size={3} />

        <SquareNavItem resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/registro-extintor.webp")}>
          <NavContent>
            <NavLabel>Registro de extintores</NavLabel>
            <NavBtn onPress={() => navigation.navigate("Extinguishers")}>
              <MaterialIcons name="arrow-forward" size={20} color="#fff" />
            </NavBtn>
          </NavContent>
        </SquareNavItem>

        <SquareNavItem resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/gabinets-bg.webp")}>
          <NavContent>
            <NavLabel>Registro de alertas</NavLabel>
            <NavBtn onPress={() => navigation.navigate("Alerts")}>
              <MaterialIcons name="arrow-forward" size={20} color="#fff" />
            </NavBtn>
          </NavContent>
        </SquareNavItem>
      </Container>
    </SafeArea>
  );
};

export default ExtinguishersMenuScreen;
