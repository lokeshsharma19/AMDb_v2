import axios from "axios";
import { config } from "../constants";

const instance = axios.create({
  baseURL: config.url.API_URL,
});

// instance.interceptors.request.use((config) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   config.headers.Authorization = `Bearer ${token}`;
//   config.withCredentials = true;
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalReq = error.config;
//     if (error?.response?.status == 403 && !originalReq._retry) {
//       originalReq._retry = true;
//       try {
//         const response = await instance.get("/auth/refresh");
//         const accessToken = response.data.accessToken;
//         localStorage.setItem("token", JSON.stringify(accessToken));
//         axios.defaults.headers.common["Authorization"] =
//           `Bearer ${accessToken}`;
//         return instance(originalReq);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
