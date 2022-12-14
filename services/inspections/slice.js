import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const inspectionsSlice = createSlice({
  name: "inspections",
  initialState: {
    inspections: [],
    inspectionData: {},
    isLoading: false,
    isProcessing: false,
  },
  extraReducers: {
    [actions.getInspections.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getInspections.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.inspections = action.payload;
    },
    [actions.getInspections.rejected]: (state, action) => {
      state.isLoading = false;
      state.inspections = [];
    },
    [actions.registerInspection.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.registerInspection.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.registerInspection.rejected]: (state) => {
      state.isProcessing = false;
    },
    [actions.editInspection.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.editInspection.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.editInspection.rejected]: (state) => {
      state.isProcessing = false;
    },
  },
});

export default inspectionsSlice.reducer;
