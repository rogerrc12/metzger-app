import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { createAlertCall, editAlertCall, getAlertsByExtinguisherCall, getAlertsByFilter } from "../../api/alerts";
import { navigate } from "../../navigation/root.navigation";

export const getAlerts = createAsyncThunk("@alerts/get_alerts", async ({ filter, value }) => {
  try {
    const alerts = await getAlertsByFilter(filter, value);

    return alerts;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAlertsByExtinguisher = createAsyncThunk("@alerts/get_alerts_by_extinguisher", async (serial) => {
  try {
    const alerts = await getAlertsByExtinguisherCall(serial);

    navigate("AlertsList", { searchedSerial: serial });

    return alerts;
  } catch (error) {
    const status = error.status || error.response.status;
    let message = error.message;

    navigate("ScannerError", { type: "search-alerts" });

    if (status === 404) message = "No se ha podido encontrar ningún extintor con ese serial. Verificalo e intenta de nuevo.";
    return rejectWithValue(message);
  }
});

export const createAlert = createAsyncThunk("@alerts/create_alert", async (values) => {
  try {
    await createAlertCall(values);

    return navigate("AlertsList");
  } catch (error) {
    const status = error.status || error.response.status;
    let message = "No se ha podido crear la alerta para este extintor. Por favor inteta más tarde.";

    if (status === 402) message = "Ya existe una alerta generada para este extintor. Puedes editarla y agregar partes adicionales.";

    Alert.alert("Ha ocurrido un error", message);
    throw new Error(error.message);
  }
});

export const editAlert = createAsyncThunk("@alerts/edit_alert", async ({ values, alertId }) => {
  try {
    await editAlertCall(values, alertId);

    return navigate("AlertsList");
  } catch (error) {
    Alert.alert("Ha ocurrido un error", "No se ha podido editar la alerta. Por favor inteta más tarde.");
    throw new Error(error.message);
  }
});
