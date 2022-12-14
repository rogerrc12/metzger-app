import { configureStore } from "@reduxjs/toolkit";
import alertsReducer from "../services/alerts/slice";
import authReducer from "../services/auth/slice";
import cataloguesReducer from "../services/catalogues/slice";
import clientsReducer from "../services/clients/slice";
import extinguishersReducer from "../services/extinguishers/slice";
import inspectionsReducer from "../services/inspections/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    clients: clientsReducer,
    extinguishers: extinguishersReducer,
    catalogues: cataloguesReducer,
    inspections: inspectionsReducer,
    alerts: alertsReducer,
  },
});

export default store;
