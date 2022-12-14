import { getFromStore } from "../helpers/secure-store";

const setAxiosInterceptors = (instance) => {
  instance.interceptors.request.use(
    async (config) => {
      console.log(`calling ${config.method.toUpperCase()} method to URL ${config.url}`);

      const accessToken = await getFromStore("accessToken");

      if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken.token}`;

      return config;
    },
    (err) => Promise.reject(err)
  );

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log(err);

      return Promise.reject(err);
    }
  );
};

export default setAxiosInterceptors;
