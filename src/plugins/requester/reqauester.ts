import { APIResponse } from "@typesDef/API";

import request, { ApiRequestConfig } from "./request";

const createAuthHeaders = (jwtToken: string) => ({
  Authorization: `${
    process.env.NEXT_PUBLIC_AUTH_PREFIX || "Bearer"
  } ${jwtToken}`,
});

type BaseRequest = <TData>(
  url: string,
  options?: ApiRequestConfig,
) => Promise<APIResponse<TData>>;

type RequestResponse = {
  get: BaseRequest;
  post: BaseRequest;
  put: BaseRequest;
  delete: BaseRequest;
};

const requester = (auth = true): RequestResponse => {
  let baseOptions: ApiRequestConfig = {};

  // - If the app is under React Native, then we don't have access to cookies so we need to pass the JWT token in the Authorization header.
  if (auth) {
    createAuthHeaders; // - Waiting usage

    baseOptions = {
      ...baseOptions,
      withCredentials: true,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const get: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig,
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "GET" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const post: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig,
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "POST" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const put: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig,
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "PUT" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const del: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig,
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "DELETE" });

  return {
    get,
    post,
    put,
    delete: del,
  };
};

export { requester };
