import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/layout/container.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { PickerSelect } from "../../components/UI/picker.component";
import { SerialSearch } from "../../components/UI/serial-search.component";
import { HideKeyboard } from "../../components/utils/hide-keyboard.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { getAlerts, getAlertsByExtinguisher } from "../../services/alerts/actions";
import AlertItem from "./components/alert-item.component";
import { AlertWrapper, Filter, FilterButton, FiltersWrapper } from "./components/alerts.styles";

const AlertsScreen = ({ navigation, route }) => {
  const [filter, setFilter] = useState(null),
    [searching, setSearching] = useState(false),
    [status, setStatus] = useState(""),
    [priority, setPriority] = useState(""),
    dispatch = useDispatch(),
    { alerts, isLoading } = useSelector((state) => state.alerts),
    params = route.params;

  let statusOptions = [
      { label: "Enviadas", value: "Enviada" },
      { label: "En proceso", value: "En proceso" },
    ],
    priorityOptions = [
      { label: "Alta", value: "Alta" },
      { label: "Media", value: "Media" },
      { label: "Baja", value: "Baja" },
    ];

  useFocusEffect(
    useCallback(() => {
      if (!searching) {
        if (filter === "status" && status) {
          dispatch(getAlerts({ filter, value: status }));
        } else if (filter === "priority" && priority) {
          dispatch(getAlerts({ filter, value: priority }));
        } else if (!filter) dispatch(getAlerts({ filter: null, value: null }));
      }
    }, [dispatch, filter, status, priority, searching])
  );

  useEffect(() => {
    if (params?.searchedSerial) setSearching(true);
  }, [params]);

  const handleClearFilter = () => {
    setFilter(null);
    setStatus("");
    setPriority("");
  };

  const handleSearch = (serial) => {
    setSearching(true);
    dispatch(getAlertsByExtinguisher(serial));
  };

  const handleSelectAlert = (item) => navigation.navigate("AlertDetails", { alert: item }),
    handleEditAlert = (item) => navigation.navigate("RegisterAlert", { alertData: item });

  return (
    <SafeArea>
      <HideKeyboard>
        <Container>
          <AlertWrapper>
            <Text variant="caption" style={{ alignSelf: "flex-start" }}>
              Filtrar por:
            </Text>
            <FiltersWrapper>
              <FilterButton onPress={() => setFilter("status")} active={filter === "status"}>
                <Filter variant="caption" active={filter === "status"}>
                  status
                </Filter>
              </FilterButton>
              <Spacer variant="left" />
              <FilterButton onPress={() => setFilter("priority")} active={filter === "priority"}>
                <Filter variant="caption" active={filter === "priority"}>
                  prioridad
                </Filter>
              </FilterButton>
              <Spacer variant="left" />
              {filter && <MaterialIcons name="close" size={25} style={{ marginLeft: "auto" }} onPress={handleClearFilter} />}
            </FiltersWrapper>
            <Spacer variant="top" />
            {filter === "status" && <PickerSelect onChange={(_, value) => setStatus(value)} value={status} options={statusOptions} placeholder="Selecciona" />}
            {filter === "priority" && <PickerSelect onChange={(_, value) => setPriority(value)} value={priority} options={priorityOptions} placeholder="Selecciona" />}
            <SerialSearch
              onSearch={handleSearch}
              serial={params?.searchedSerial}
              onScan={() =>
                navigation.navigate("Scanner", {
                  screen: "QrValidation",
                  params: {
                    type: "search-alerts",
                  },
                })
              }
              searching={searching}
              setSearching={setSearching}
            />
            <Spacer variant="top" size={2} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              {isLoading ? (
                <ActivityIndicator color="#0057D6" size="large" />
              ) : alerts.length > 0 ? (
                <FlatList
                  keyExtractor={(item) => item.id.toString()}
                  style={{ maxHeight: Dimensions.get("screen").height / 1.7 }}
                  data={alerts}
                  renderItem={({ item }) => <AlertItem item={item} onSelect={handleSelectAlert.bind(null, item)} onEdit={handleEditAlert.bind(null, item)} />}
                  keyboardShouldPersistTaps="always"
                />
              ) : (
                <Text variant="bold" style={{ textAlign: "center" }}>
                  No se han encontrado alertas
                </Text>
              )}
            </View>
          </AlertWrapper>
          <Button
            title="Crear alerta"
            onPress={() =>
              navigation.navigate("Scanner", {
                screen: "QrValidation",
                params: {
                  type: "add-alert",
                },
              })
            }
          />
          <Spacer variant="top" />
        </Container>
      </HideKeyboard>
    </SafeArea>
  );
};

export default AlertsScreen;
