import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    isLoading: true,
    selectedClient: null,
  },
  extraReducers: {
    [actions.getClients.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getClients.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.clients = action.payload;
    },
    [actions.getClients.rejected]: (state) => {
      state.isLoading = false;
      state.clients = [];
    },
    [actions.selectClient]: (state, action) => {
      state.selectedClient = action.payload.client;
    },
  },
});

export default clientsSlice.reducer;
