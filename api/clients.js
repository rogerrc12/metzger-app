import camelize from "camelize";
import axios from "./axios";

export const getClientsCall = async () => {
  const response = await axios.get("/v1/clients");

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data.clients);
};
