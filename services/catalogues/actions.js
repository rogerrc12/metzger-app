import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessoriesCall, getActionsCall, getCataloguesCall, getSublocationsCall } from "../../api/catalogues";

export const getCatalogues = createAsyncThunk("@catalogues/get_catalogues", async (businessId) => {
  try {
    const catalogues = await getCataloguesCall(businessId);

    return catalogues;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getSublocations = createAsyncThunk("@catalogues/get_sublocations", async (id) => {
  try {
    const sublocations = await getSublocationsCall(id);

    return sublocations;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getActions = createAsyncThunk("@catalogues/get_actions", async () => {
  try {
    const actions = await getActionsCall();

    return actions;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAccessories = createAsyncThunk("@catalogues/get_accessories", async () => {
  try {
    const accessories = await getAccessoriesCall();

    return accessories;
  } catch (error) {
    throw new Error(error.message);
  }
});
