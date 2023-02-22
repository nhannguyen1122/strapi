import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IHttpConfig extends AxiosRequestConfig {}

/**
 * define shape of restfull api
 */
export interface IHttpResponse<T> extends AxiosResponse<T> {}
