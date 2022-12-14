import camelize from "camelize";
import axios from "./axios";

export const getInspectionsCall = async (id) => {
  const response = await axios.get(`/v1/inspections-by-extinguisher/${id}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data.inspections);
};

export const getInspectionByIdCall = async (id) => {};

export const registerInspectionCall = async (values) => {
  const response = await axios.post("/v1/inspections", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "inspection added.";
};

export const editInspectionCall = async (values, id) => {
  const response = await axios.put(`/v1/inspections/${id}`, values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "inspection edited.";
};
