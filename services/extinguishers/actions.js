import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { Alert } from "react-native";
import {
  editExtinguisherCall,
  getExtinguisherByIdCall,
  getExtinguisherBySerialCall,
  getExtinguishersCall,
  registerExtinguisherCall,
  validateQrCodeCall,
} from "../../api/extinguishers";
import { navigate } from "../../navigation/root.navigation";

const formatDate = (date) => format(date, "dd-MM-yyyy");

export const getExtinguishers = createAsyncThunk("@extinguishers/get_extinguishers", async (id) => {
  try {
    const extinguishers = await getExtinguishersCall(id);

    return extinguishers;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getExtinguisherById = createAsyncThunk("@auth/get_extinguisher_by_id", async (id) => {
  try {
    const extinguisher = await getExtinguisherByIdCall(id);

    return extinguisher;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getExtinguisherBySerial = createAsyncThunk("@auth/get_extinguisher_by_serial", async ({ serial, type }, { rejectWithValue }) => {
  try {
    const extinguisher = await getExtinguisherBySerialCall(serial);

    if (type === "search-extinguisher") navigate("ExtinguishersList");
    if (type === "add-alert") {
      if (extinguisher.alerts?.length > 0) {
        const error = new Error();

        error.message = "Ya existe una alerta generada para este extintor. Puedes editarla y agregar partes adicionales.";
        error.status = 400;
      }

      navigate("RegisterAlert", { extinguisher });
    }

    return extinguisher;
  } catch (error) {
    const status = error.status || error.response.status;
    let message = error.message;

    navigate("ScannerError", { type });

    if (status === 404) message = "No se ha encontrado ningún extintor asociado a ese QR. Por favor intenta con uno diferente.";
    return rejectWithValue(message);
  }
});

export const validateQrCode = createAsyncThunk("@extinguishers/validate_qr_code", async (code) => {
  try {
    const verifiedQr = await validateQrCodeCall(code);
    navigate("RegisterExtinguisher");

    return verifiedQr;
  } catch (error) {
    const status = error.status || error.response.status;

    Alert.alert("No se pudo validar", status === 401 ? "" : "El código que intentas validar se encuentra asignado a otro extintor.");
    throw new Error(error.message);
  }
});

export const registerExtinguisher = createAsyncThunk("@extinguishers/register_extinguisher", async (values) => {
  try {
    const extinguisherValues = {
      ...values,
      cornet: Number(values.cornet),
      hose: Number(values.hose),
      hose_holder: Number(values.hose_holder),
      nozzle: Number(values.nozzle),
      piton: Number(values.piton),
      vehicle_bracket: Number(values.vehicle_bracket),
      manufacturing_date: values.is_manufacturing_date ? "N/A" : formatDate(values.manufacturing_date),
      hydrostatic_test_date: formatDate(values.hydrostatic_test_date),
      inspection_date: formatDate(values.inspection_date),
      recharge_date: formatDate(values.recharge_date),
      latitude: values.latitude,
      longitude: values.longitude,
    };

    await registerExtinguisherCall(extinguisherValues);

    navigate("ExtinguishersList");
  } catch (error) {
    console.log({ status: error.status, error: error.message });

    Alert.alert("No se pudo agregar", "Ha ocurrido un error registrando el extintor. Por favor verificar todos los datos e intenta de nuevo.");
    throw new Error(error.message);
  }
});

export const editExtinguisher = createAsyncThunk("@extinguishers/edit_extinguisher", async ({ values, id }) => {
  const extinguisherValues = {
    ...values,
    cornet: Number(values.cornet),
    hose: Number(values.hose),
    hose_holder: Number(values.hose_holder),
    nozzle: Number(values.nozzle),
    piton: Number(values.piton),
    vehicle_bracket: Number(values.vehicle_bracket),
    hydrostatic_test_date: formatDate(values.hydrostatic_test_date),
    recharge_date: formatDate(values.recharge_date),
  };

  try {
    const response = await editExtinguisherCall(extinguisherValues, id);
    navigate("ExtinguishersList");

    return response;
  } catch (error) {
    console.log(error);
    Alert.alert("No se pudo agregar", "Ha ocurrido un error editando el extintor. Por favor verificar todos los datos e intenta de nuevo.");
    throw new Error(error.message);
  }
});
