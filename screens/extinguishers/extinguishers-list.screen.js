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
import { getClients, selectClient } from "../../services/clients/actions";
import { getExtinguisherBySerial, getExtinguishers } from "../../services/extinguishers/actions";
import ExtinguisherItem from "./components/extinguisher-item.component";
import { ExtinguishersWrapper, NoListWrapper } from "./components/extinguishers.styles";

const ExtinguishersScreen = ({ navigation, route }) => {
  const dispatch = useDispatch(),
    clients = useSelector((state) => state.clients.clients),
    { extinguishers, isLoading } = useSelector((state) => state.extinguishers),
    params = route.params,
    user = useSelector((state) => state.auth.user),
    [selectedClient, setSelectedClient] = useState(user.businessId),
    [searching, setSearching] = useState(false),
    [clientsOptions, setClientsOptions] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (!user.businessId) dispatch(getClients());
    }, [dispatch, user.businessId])
  );

  useFocusEffect(
    useCallback(() => {
      if (selectedClient && !searching) dispatch(getExtinguishers(selectedClient));
    }, [dispatch, selectedClient, searching, params])
  );

  useEffect(() => {
    if (clients.length > 0) {
      let options = clients.map((client) => ({
        value: client.id,
        label: client.businessName,
      }));
      setClientsOptions(options);
    }
  }, [clients]);

  const onCompanySelect = (_, value) => {
      let client = clients.find((c) => c.id === value);
      dispatch(selectClient(client));
      setSelectedClient(value);
    },
    onAlertSelect = (alert) => {
      navigation.navigate("Alerts", {
        screen: "AlertDetails",
        params: {
          alert,
        },
      });
    },
    onEdit = (item) => navigation.navigate("EditExtinguisher", { extinguisher: item });

  const handleSearch = (serial) => {
    setSearching(true);
    dispatch(getExtinguisherBySerial({ serial, type: "search-serie" }));
  };

  const handleScan = (type) => {
    navigation.navigate("Scanner", {
      screen: "QrValidation",
      params: {
        type,
      },
    });
  };

  return (
    <SafeArea>
      <HideKeyboard>
        <Container>
          <ExtinguishersWrapper>
            {!user.businessId ? (
              <PickerSelect
                options={clientsOptions}
                label="¿Que empresa deseas listar?"
                name="client"
                placeholder="Seleccciona una empresa"
                value={selectedClient}
                onChange={onCompanySelect}
                disabled={searching}
              />
            ) : null}
            <Spacer variant="top" size={2} />
            <SerialSearch onSearch={handleSearch} onScan={handleScan.bind(null, "search-extinguisher")} searching={searching} setSearching={setSearching} />
            <Spacer variant="top" size={2} />
            <View style={{ flex: 1, justifyContent: "center" }}>
              {isLoading ? (
                <ActivityIndicator color="#0057D6" size="large" />
              ) : extinguishers.length > 0 ? (
                <FlatList
                  keyExtractor={(item) => item.id.toString()}
                  style={{ maxHeight: Dimensions.get("screen").height / 1.8 }}
                  data={extinguishers}
                  renderItem={({ item }) => (
                    <ExtinguisherItem
                      item={item}
                      onEdit={onEdit.bind(null, item)}
                      onSelectAlert={onAlertSelect}
                      onShowInspections={() => navigation.navigate("InspectionsList", { id: item.id })}
                    />
                  )}
                  keyboardShouldPersistTaps="always"
                />
              ) : (
                <NoListWrapper>
                  <Text variant="bold" style={{ textAlign: "center" }}>
                    No se han encontrado extintores registrados
                  </Text>
                </NoListWrapper>
              )}
            </View>
          </ExtinguishersWrapper>
          <Spacer variant="top" />
          {selectedClient ? <Button title="Registrar extintor" onPress={handleScan.bind(null, "add-extinguisher")} /> : null}
        </Container>
      </HideKeyboard>
    </SafeArea>
  );
};

export default ExtinguishersScreen;
