import { createAsyncThunk } from "@reduxjs/toolkit";
import { editInspectionCall, getInspectionsCall, registerInspectionCall } from "../../api/inspections";
import { navigate } from "../../navigation/root.navigation";

export const getInspections = createAsyncThunk("@inspections/get_inspections", async (id) => {
  try {
    const inspections = await getInspectionsCall(id);

    return inspections;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const registerInspection = createAsyncThunk("@inspections/register_inspections", async (values) => {
  try {
    await registerInspectionCall(values);

    return navigate("InspectionsList", { id: values.extinguisher_id });
  } catch (error) {
    throw new Error(error.message);
  }
});

export const editInspection = createAsyncThunk("@inspections/edit_inspection", async ({ values, id }) => {
  try {
    await editInspectionCall(values, id);

    return navigate("InspectionsList", { id: values.extinguisher_id });
  } catch (error) {
    throw new Error(error.message);
  }
});
