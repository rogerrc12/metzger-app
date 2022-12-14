import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { NavBtn, NavContent, NavItem, NavLabel, Title } from "./components/welcome.styles";

const HomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <Spacer variant="top" size={2} />
          <Title>Bienvenido {user.name + " " + user.lastName}</Title>
          <Spacer variant="top" size={3} />
          <NavItem resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/extintores-bg.webp")}>
            <NavContent>
              <NavLabel>Extintores</NavLabel>
              <NavBtn onPress={() => navigation.navigate("ExtinguishersMenu")}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/gabinets-bg.webp")}>
            <NavContent>
              <NavLabel>Gabinetes contra incendios</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/emergency-station-bg.webp")}>
            <NavContent>
              <NavLabel>Estaciones de emergencia</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/emergency-lamps-bg.webp")}>
            <NavContent>
              <NavLabel>Lámparas de emergencia</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/autocontenidos-bg.webp")}>
            <NavContent>
              <NavLabel>Autocontenidos</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/traje-bomberos.webp")}>
            <NavContent>
              <NavLabel>Trajes de bomberos</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/compesor-de-aire-respirable.webp")}>
            <NavContent>
              <NavLabel>Compresor de aire respirable</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/equipos-altura.webp")}>
            <NavContent>
              <NavLabel>Equipos para trabajo de altura</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>

          <NavItem disabled resizeMethod="auto" resizeMode="cover" source={require("../../assets/images/navigation/equipos-para-extricación.webp")}>
            <NavContent>
              <NavLabel>Equipos para Extricación</NavLabel>
              <NavBtn disabled onPress={() => {}}>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" />
              </NavBtn>
            </NavContent>
          </NavItem>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;
