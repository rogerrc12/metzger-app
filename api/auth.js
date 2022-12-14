import camelize from "camelize";
import axios from "./axios";

export const loginUserCall = async (values) => {
  const response = await axios.post("/v1/login", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};

export const logoutUserCall = async () => {
  const response = await axios.get("/v1/logout");
  if (response.status >= 400) throw new Error(response.errors[0]);

  return "user logged out";
};

export const recoverPasswordCall = async (values) => {
  const response = await axios.post("/v1/password/email", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "email sent";
};

export const verifyCodeCall = async (values) => {
  const response = await axios.post("/v1/password/code/check", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "code verified";
};

export const resetPasswordCall = async (values) => {
  const response = await axios.post("/v1/password/reset", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return "password reseted";
};
