import camelize from "camelize";
import axios from "./axios";

export const getExtinguishersCall = async (id) => {
  const response = await axios.get(`/v1/clients/extinguishers/${id}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data.extinguishers);
};

export const getExtinguisherByIdCall = async (id) => {
  const response = await axios.get(`/v1/extinguishers/${id}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data.extinguisher);
};

export const getExtinguisherBySerialCall = async (serial) => {
  const response = await axios.get(`/v1/extinguishers/get-by-serial/${serial}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data.data);
};

export const validateQrCodeCall = async (code) => {
  const response = await axios.get(`/v1/qrs/verify/${code}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data.qr);
};

export const registerExtinguisherCall = async (values) => {
  const response = await axios.post("/v1/extinguishers", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "extinguisher registered";
};

export const editExtinguisherCall = async (values, id) => {
  const response = await axios.put(`/v1/extinguishers/${id}`, values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "extinguisher edited";
};
