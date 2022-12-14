import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    alerts: [],
    isLoading: true,
    isProcessing: false,
  },
  extraReducers: {
    [actions.getAlerts.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getAlerts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.alerts = action.payload;
    },
    [actions.getAlerts.rejected]: (state) => {
      state.isLoading = false;
      state.alerts = [];
    },
    [actions.getAlertsByExtinguisher.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getAlertsByExtinguisher.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.alerts = action.payload;
    },
    [actions.getAlertsByExtinguisher.rejected]: (state) => {
      state.isLoading = false;
      state.alerts = [];
    },
    [actions.createAlert.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.createAlert.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.createAlert.rejected]: (state) => {
      state.isProcessing = false;
    },
    [actions.editAlert.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.editAlert.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.editAlert.rejected]: (state) => {
      state.isProcessing = false;
    },
  },
});

export default alertsSlice.reducer;
