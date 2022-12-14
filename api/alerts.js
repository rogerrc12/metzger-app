import camelize from "camelize";
import axios from "./axios";

export const getAlertsByFilter = async (filter, value) => {
  let query = filter ? `?${filter}=${value}` : "";
  const response = await axios.get(`/v1/alerts/alerts-list${query}`);

  if (response.status >= 400) throw new Error(response.error[0]);

  return camelize(response.data.data);
};

export const createAlertCall = async (values) => {
  const response = await axios.post("/v1/alerts", values);

  if (response.status >= 400) throw new Error(response.error[0]);

  return "alert created.";
};

export const editAlertCall = async (values, alertId) => {
  const response = await axios.put(`/v1/alerts/${alertId}`, values);

  if (response.status >= 400) throw new Error(response.error[0]);

  return "alert edited.";
};

export const getAlertsByExtinguisherCall = async (serial) => {
  const response = await axios.get(`/v1/alerts/alerts-list-extinguisher/${serial}`);

  if (response.status >= 400) throw new Error(response.error[0]);

  return camelize(response.data.data);
};
