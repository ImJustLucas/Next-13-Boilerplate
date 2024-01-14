import { APIError, APIResponse } from "@typesDef/API";
import axios, { AxiosRequestConfig } from "axios";

type ApiRequestConfig = Exclude<AxiosRequestConfig, "method">;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 6000,
  transformRequest: [
    function (data) {
      return JSON.stringify(data);
    },
  ],
});

const request = async <TData>(
  url: string,
  options?: ApiRequestConfig,
): Promise<APIResponse<TData>> => {
  const response = instance<APIResponse<TData>>(url, { ...options })
    .then((response) => response.data)
    .catch((error: APIError) => {
      throw error;
    });

  return response;
};

export type { ApiRequestConfig };
export default request;
