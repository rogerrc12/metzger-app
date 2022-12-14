import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const cataloguesSlice = createSlice({
  name: "catalogues",
  initialState: {
    locations: [],
    sublocations: [],
    types: [],
    brands: [],
    classes: [],
    capacities: [],
    agents: [],
    actions: [],
    accessories: [],
    status: [],
    providers: [],
    isLoading: false,
  },
  extraReducers: {
    [actions.getCatalogues.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getCatalogues.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.locations = action.payload.locations;
      state.types = action.payload.types;
      state.brands = action.payload.brands;
      state.classes = action.payload.classes;
      state.capacities = action.payload.capacities;
      state.agents = action.payload.agents;
      state.status = action.payload.status;
      state.providers = action.payload.providers;
    },
    [actions.getCatalogues.rejected]: (state) => {
      state.isLoading = false;
    },
    [actions.getSublocations.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getSublocations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sublocations = action.payload;
    },
    [actions.getSublocations.rejected]: (state) => {
      state.isLoading = false;
    },
    [actions.getActions.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getActions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.actions = action.payload;
    },
    [actions.getActions.rejected]: (state) => {
      state.isLoading = false;
    },
    [actions.getAccessories.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.getAccessories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.accessories = action.payload;
    },
    [actions.getAccessories.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default cataloguesSlice.reducer;
