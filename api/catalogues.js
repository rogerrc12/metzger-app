import baseAxios from "axios";
import camelize from "camelize";
import axios from "./axios";

export const getCataloguesCall = async (businessId) => {
  let endpoints = [
    `/v1/catalogues/locations/${businessId}`,
    "/v1/catalogues/types",
    "/v1/catalogues/brands",
    "/v1/catalogues/clases",
    "/v1/catalogues/capacities",
    "/v1/catalogues/agents",
    "/v1/catalogues/status",
    "/v1/catalogues/providers",
  ];

  const responses = await baseAxios.all(endpoints.map((endpoint) => axios.get(endpoint)));

  responses.forEach((res) => {
    if (res.status >= 400) throw new Error(res.errors[0]);
  });

  return {
    locations: camelize(responses[0].data.locations),
    types: camelize(responses[1].data.types),
    brands: camelize(responses[2].data.brands),
    classes: camelize(responses[3].data.clases),
    capacities: camelize(responses[4].data.capacities),
    agents: camelize(responses[5].data.agents),
    status: camelize(responses[6].data.status),
    providers: camelize(responses[7].data.providers),
  };
};

export const getSublocationsCall = async (id) => {
  const response = await axios.get(`/v1/catalogues/sublocations/${id}`);

  if (response.status >= 400) throw new Error(response.error[0]);

  return camelize(response.data.sublocations);
};

export const getActionsCall = async () => {
  const response = await axios.get("/v1/catalogues/actions");

  if (response.status >= 400) throw new Error(response.error[0]);

  return camelize(response.data.actions);
};

export const getAccessoriesCall = async () => {
  const response = await axios.get("/v1/catalogues/accessories");

  if (response.status >= 400) throw new Error(response.error[0]);

  return camelize(response.data.accessories);
};
