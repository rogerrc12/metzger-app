import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getClientsCall } from "../../api/clients";

export const getClients = createAsyncThunk("@clients/get_clients", async (_, { rejectWithValue }) => {
  try {
    const clients = await getClientsCall();

    return clients;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const selectClient = createAction("@clients/select_client", (client) => {
  return {
    payload: {
      client,
    },
  };
});
