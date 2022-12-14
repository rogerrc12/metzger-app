import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const extinguishersSlice = createSlice({
  name: "extinguishers",
  initialState: {
    extinguishers: [],
    extinguisherData: {},
    inspections: [],
    inspectionsData: {},
    verifiedQr: {},
    isLoading: false,
    isValidating: false,
    isProcessing: false,
    error: null,
  },
  extraReducers: {
    [actions.getExtinguishers.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getExtinguishers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.extinguishers = action.payload;
    },
    [actions.getExtinguishers.rejected]: (state) => {
      state.isLoading = false;
      state.extinguishers = [];
    },
    [actions.getExtinguisherById.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getExtinguisherById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.extinguisherData = action.payload;
    },
    [actions.getExtinguisherById.rejected]: (state) => {
      state.isLoading = false;
      state.extinguisherData = {};
    },
    [actions.getExtinguisherBySerial.pending]: (state) => {
      state.isLoading = true;
      state.isValidating = true;
    },
    [actions.getExtinguisherBySerial.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isValidating = false;
      state.extinguishers = [action.payload];
    },
    [actions.getExtinguisherBySerial.rejected]: (state, action) => {
      state.isLoading = false;
      state.isValidating = false;
      state.error = action.payload;
    },
    [actions.validateQrCode.pending]: (state) => {
      state.isLoading = true;
      state.isValidating = true;
    },
    [actions.validateQrCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isValidating = false;
      state.verifiedQr = action.payload;
      state.extinguisherData = {};
    },
    [actions.validateQrCode.rejected]: (state) => {
      state.isLoading = false;
      state.isValidating = false;
      state.verifiedQr = {};
    },
    [actions.registerExtinguisher.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.registerExtinguisher.fulfilled]: (state) => {
      state.isProcessing = false;
      state.verifiedQr = {};
    },
    [actions.registerExtinguisher.rejected]: (state) => {
      state.isProcessing = false;
    },
    [actions.editExtinguisher.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.editExtinguisher.fulfilled]: (state) => {
      state.isProcessing = false;
      state.extinguisherData = {};
    },
    [actions.editExtinguisher.rejected]: (state) => {
      state.isProcessing = false;
    },
  },
});

export default extinguishersSlice.reducer;
